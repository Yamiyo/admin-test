const Mock = require('mockjs')

const performance_data = Mock.mock({
  'items': [{
    id: 1,
    master: 'Edward',
    member: '小夫',
    status: 0,
    items: [{ item: '手部按摩', num: 2 }, { item: '足底按摩', num: 1 }],
    amount: 2000,
    start_time: '2020-08-17 12:00',
    end_time: '2020-08-17 15:00'
  },
  {
    id: 2,
    master: 'Mori',
    member: '技安',
    status: 1,
    items: [{ item: '足底按摩', num: 2 }, { item: '肩頸按摩', num: 1 }],
    amount: 4000,
    start_time: '2020-08-16 22:00',
    end_time: '2020-08-17 01:00'
  },
  {
    id: 3,
    master: 'Alex',
    member: '大雄',
    status: 1,
    items: [{ item: '指壓按摩', num: 2 }, { item: '全身精油SPA', num: 1 }, { item: '全身去角質', num: 2 }],
    amount: 6000,
    start_time: '2020-08-16 14:00',
    end_time: '2020-08-16 19:00'
  },
  {
    id: 3,
    master: 'Alex',
    member: '大雄',
    status: 1,
    items: [{ item: '指壓按摩', num: 2 }, { item: '全身精油SPA', num: 1 }, { item: '全身去角質', num: 2 }],
    amount: 6000,
    start_time: '2020-08-16 14:00',
    end_time: '2020-08-16 19:00'
  },
  {
    id: 3,
    master: 'Alex',
    member: '大雄',
    status: 1,
    items: [{ item: '指壓按摩', num: 2 }, { item: '全身精油SPA', num: 1 }, { item: '全身去角質', num: 2 }],
    amount: 6000,
    start_time: '2020-08-16 14:00',
    end_time: '2020-08-16 19:00'
  },
  {
    id: 3,
    master: 'Alex',
    member: '大雄',
    status: 1,
    items: [{ item: '指壓按摩', num: 2 }, { item: '全身精油SPA', num: 1 }, { item: '全身去角質', num: 2 }],
    amount: 6000,
    start_time: '2020-08-16 14:00',
    end_time: '2020-08-16 19:00'
  },
  {
    id: 3,
    master: 'Alex',
    member: '大雄',
    status: 1,
    items: [{ item: '指壓按摩', num: 2 }, { item: '全身精油SPA', num: 1 }, { item: '全身去角質', num: 2 }],
    amount: 6000,
    start_time: '2020-08-16 14:00',
    end_time: '2020-08-16 19:00'
  },
  {
    id: 3,
    master: 'Alex',
    member: '大雄',
    status: 1,
    items: [{ item: '指壓按摩', num: 2 }, { item: '全身精油SPA', num: 1 }, { item: '全身去角質', num: 2 }],
    amount: 6000,
    start_time: '2020-08-16 14:00',
    end_time: '2020-08-16 19:00'
  },
  {
    id: 3,
    master: 'Alex',
    member: '大雄',
    status: 1,
    items: [{ item: '指壓按摩', num: 2 }, { item: '全身精油SPA', num: 1 }, { item: '全身去角質', num: 2 }],
    amount: 6000,
    start_time: '2020-08-16 14:00',
    end_time: '2020-08-16 19:00'
  },
  {
    id: 3,
    master: 'Alex',
    member: '大雄',
    status: 1,
    items: [{ item: '指壓按摩', num: 2 }, { item: '全身精油SPA', num: 1 }, { item: '全身去角質', num: 2 }],
    amount: 6000,
    start_time: '2020-08-16 14:00',
    end_time: '2020-08-16 19:00'
  },
  {
    id: 3,
    master: 'Alex',
    member: '大雄',
    status: 1,
    items: [{ item: '指壓按摩', num: 2 }, { item: '全身精油SPA', num: 1 }, { item: '全身去角質', num: 2 }],
    amount: 6000,
    start_time: '2020-08-16 14:00',
    end_time: '2020-08-16 19:00'
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/performance/list',
    type: 'get',
    response: config => {
      const items = performance_data.items
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
