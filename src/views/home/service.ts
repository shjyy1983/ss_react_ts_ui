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


  }
};

export default service;