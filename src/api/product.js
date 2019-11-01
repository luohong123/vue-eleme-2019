import request from '@/utils/request';

export function productList(param) {
  return request({
    url: '/product/list',
    method: 'get',
    data: param
  });
}
