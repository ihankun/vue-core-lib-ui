import SvgIcon from './components/svg'

const components = [
  SvgIcon
]

const install = (app, opts = {}) => {
  components.forEach(item => {
    app.component(item.name, item)
  })
}

const exportObject = {
  version: '0.0.1',
  install,
  SvgIcon
};

export default exportObject;
