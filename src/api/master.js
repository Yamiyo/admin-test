import request from '@/utils/request'

export function getMasterList(params) {
  return request({
    url: '/vue-admin-template/master/list',
    method: 'get',
    params
  })
}
