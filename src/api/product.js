import request from '@/utils/request';

export function product(param) {
  return request({
    url: '/product',
    method: 'get',
    data: param
  });
}
