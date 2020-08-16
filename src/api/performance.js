import request from '@/utils/request'

export function getPerformanceData(params) {
  return request({
    url: '/vue-admin-template/performance/list',
    method: 'get',
    params
  })
}
