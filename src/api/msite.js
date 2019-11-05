import request from '@/utils/request';
export function msiteList(param) {
  return request({
    url: '/msite/list',
    method: 'get',
    data: param
  });
}
