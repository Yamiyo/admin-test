const Mock = require('mockjs')

const product_data = Mock.mock({
  'items': [{
    id: 1,
    product_name: '手部按摩',
    status: 1,
    amount: 600,
    minute: 30,
    start_time: '2020-01-01',
    end_time: null,
    remark: ''
  },
  {
    id: 2,
    product_name: '足底按摩',
    status: 1,
    amount: 800,
    minute: 30,
    start_time: '2020-01-01',
    end_time: null,
    remark: ''
  },
  {
    id: 3,
    product_name: '全身精油SPA',
    status: 1,
    amount: 1500,
    minute: 60,
    start_time: '2020-01-01',
    end_time: null,
    remark: ''
  },
  {
    id: 4,
    product_name: '全身去角質',
    status: 1,
    amount: 1500,
    minute: 60,
    start_time: '2020-01-01',
    end_time: null,
    remark: ''
  },
  {
    id: 5,
    product_name: '活動套餐A',
    status: 0,
    amount: 2000,
    minute: 65,
    start_time: '2020-01-01',
    end_time: '2020-05-31',
    remark: '精油按摩SPA 60分鐘＋沐足 5分鐘'
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/product/list',
    type: 'get',
    response: config => {
      const items = product_data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
