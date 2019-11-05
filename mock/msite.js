import Mock from 'mockjs';
const List = [];
List.push(
  Mock.mock({
    id: '@increment',
    name: '美食',
    image: '@/assets/images/home-item1.jpeg',
    router: '/msite/food'
  })
);
export default [{
  url: '/msite/list',
  type: 'get',
  response: config => {
    const {
      id,
      page = 1,
      limit = 20,
      sort
    } = config.query;
    let mockList = List.filter(item => {
      console.log(+id, 'mockList');
      console.log(item.id, 'mockList');
      if (id && item.id !== +id) return false;
      return true;
    });
    if (sort === '-id') {
      mockList = mockList.reverse();
    }
    const pageList = mockList.filter(
      (item, index) => index < limit * page && index >= limit * (page - 1)
    );
    return {
      code: 20000,
      data: {
        total: mockList.length,
        items: pageList
      }
    };
  }
}
];

