
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
        id: 1004,
        title: '测试 View',
        path: '/testView'
      },
      {
        id: 1005,
        title: '测试 Transition',
        path: '/testTransition'
      },
      {
        id: 1006,
        title: '测试 SSelect',
        path: '/testSelect'
      },
      {
        id: 1007,
        title: '测试 SInput',
        path: '/testInput'
      },
      {
        id: 1008,
        title: '测试 SIcon',
        path: '/testIcon'
      },
      {
        id: 1009,
        title: '测试 Actionsheet',
        path: '/testActionsheet'
      },
      {
        id: 1010,
        title: '测试 SCell',
        path: '/testCell'
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
        id: 2015,
        title: '测试 react-transition-group2',
        subTitle: 'CSSTransition',
        path: '/testReactTransitionGroup2'
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
      },
      {
        id: 2006,
        title: '测试创建组件',
        subTitle: '使用React.createElement',
        path: '/testCreateElement'
      },
      {
        id: 2009,
        title: '测试克隆组件',
        subTitle: '使用React.cloneElement',
        path: '/testCloneElement'
      },
      {
        id: 2007,
        title: '测试SFC',
        subTitle: '无状态组件',
        path: '/testSFC'
      },
      {
        id: 2008,
        title: '测试memo',
        subTitle: '包装函数用于创建PureComponent',
        path: '/testMemo'
      },
      {
        id: 2010,
        title: '测试Children',
        subTitle: 'React.Children',
        path: '/testChildren'
      },
      {
        id: 2011,
        title: '测试Fragment',
        subTitle: 'React.Fragment',
        path: '/testFragment'
      },
      {
        id: 2012,
        title: '测试引用传递',
        subTitle: 'React.forwardRef',
        path: '/testForwardRef'
      },
      {
        id: 2013,
        title: '测试Marked',
        path: '/testMarked'
      },
      {
        id: 2014,
        title: '测试@babel/standalone',
        subTitle: '在浏览器环境中跑babel',
        path: '/testBabelStandalone'
      },
      {
        id: 2016,
        title: '测试react-click-outside',
        path: '/testReactClickOutside'
      }
    ];
    return list;
  }
};

export default service;