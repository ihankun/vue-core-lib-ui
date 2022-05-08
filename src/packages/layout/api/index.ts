import http from '@/packages/http/http';

const findMenuList = () => {
  return http.post('/app/menu/findMenuList')
};

export const menuApi = {
  findMenuList
}
