import Vue from 'vue';

export default class ProofTime {
  static format(type = 'yyyy-MM-dd hh:mm:ss') {
    const session = Vue.prototype.$session;

    let timeStamp = 0;

    const clientDate = new Date().getTime();

    if (session.has('timeStamp')) {
      timeStamp = session.get('timeStamp');
    }

    const currentDate = new Date(clientDate + timeStamp);

    return this._formatData(type, currentDate);
  }

  static proofread(date) {
    const session = Vue.prototype.$session;

    const serviceTimeStamp = new Date(date).getTime();

    const clientTimsStamp = new Date().getTime();

    const timeStamp = serviceTimeStamp - clientTimsStamp;

    if (session.has('timeStamp')) {
      session.remove('timeStamp');
    }

    session.start();
    session.set('timeStamp', timeStamp);
  }

  static _formatData(fmt, date) {
    let ret;
    const opt = {
      'y+': date.getFullYear().toString(),
      'M+': (date.getMonth() + 1).toString(),
      'd+': date.getDate().toString(),
      'h+': date.getHours().toString(),
      'm+': date.getMinutes().toString(),
      's+': date.getSeconds().toString()
    };
    for (const k in opt) {
      ret = new RegExp('(' + k + ')').exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'));
      }
    }
    return fmt;
  }
}
