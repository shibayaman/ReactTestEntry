//今のとこデータベース周りまで作る気は無いのでインメモリーで対応
const data = {
  index: 1,
  todo: [
    {
      id: 0,
      task: '洗濯機まわす',
      due: '今すぐ',
      priority: 'とても高い'
    }
  ]
};

module.exports = data;