const Mock = require('mockjs')

const master_list = Mock.mock({
  'items': [{
    id: 1,
    name: 'Edward',
    status: 1,
    level: 5,
    create_time: '2020-01-15',
    resign_time: null,
    remark: ''
  },
  {
    id: 2,
    name: 'Alex',
    status: 0,
    level: 8,
    create_time: '2020-02-15',
    resign_time: null,
    remark: ''
  },
  {
    id: 3,
    name: 'Mori',
    status: 1,
    level: 2,
    create_time: '2020-03-15',
    resign_time: null,
    remark: ''
  },
  {
    id: 4,
    name: 'Ray',
    status: 1,
    level: 5,
    create_time: '2020-04-15',
    resign_time: null,
    remark: ''
  },
  {
    id: 5,
    name: 'Tako',
    status: -99,
    level: 5,
    create_time: '2019-12-15',
    resign_time: '2020-05-01',
    remark: ''
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/master/list',
    type: 'get',
    response: config => {
      const items = master_list.items
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
