function dup(arry) {
    const news = [];
    for (const w of arry) {
      const temp = [];
      for (let i = 0; i < w.length; i++) {
        if (w[i] !== temp[temp.length - 1]) {
          temp.push(w[i]);
        }
      }
      news.push(temp.join(''));
    }
    return news;
  }  