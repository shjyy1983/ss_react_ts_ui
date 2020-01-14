const service = {
  getDatas(): Array<any> {
    const list: Array<any> = [];
    for (let i = 0; i < 1; i++) {
      const data = {
        id: `${i}`,
        title: `title_${i}`,
        subTitle: `subtitle_${i}`
      };
      list.push(data);
    }
    return list;

  },

  getMenuDatas(): Array<any> {
    const list: Array<any> = [
      {
        id: 1001,
        title: '测试SButton',
        path: '/testButton'
      }
    ];
    return list;
  }
};

export default service;