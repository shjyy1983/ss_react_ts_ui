
const service = {
  getMenuDatas(): Array<{ [key: string]: any }> {
    const list: Array<{ [key: string]: any }> = [
      {
        id: 1001,
        title: '测试SButton',
        subTitle: 'hello',
        path: '/testButton'
      }
    ];
    return list;
  }
};

export default service;