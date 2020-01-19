
const service = {
  getMenuDatas(): Array<Record<string, any>> {
    const list: Array<Record<string, any>> = [
      {
        id: 1001,
        title: '测试 SButton',
        subTitle: 'hello',
        path: '/testButton'
      },
      {
        id: 1002,
        title: '测试 SMessageBox',
        path: '/testMessageBox'
      },
      {
        id: 1003,
        title: '测试 SModal',
        path: '/testModal'
      },
      {
        id: 2001,
        title: '测试 Raf',
        path: '/testRaf'
      },
      {
        id: 2002,
        title: '测试 react-transition-group',
        path: '/testReactTransitionGroup'
      },
      {
        id: 2003,
        title: '测试 UseState',
        path: '/testUseState'
      },
      {
        id: 2004,
        title: '测试传递参数',
        subTitle: '父传子，子传父，兄弟间传递',
        path: '/testPassParam'
      },
      {
        id: 2005,
        title: '测试引用',
        path: '/testRef'
      }
    ];
    return list;
  }
};

export default service;