module.exports.jsonApi = (req, res) => {
  res.status(200);
  res.json({
    todo: [
      {
        id: 0,
        task: '洗濯機まわす',
        due: '今すぐ',
        priority: 'とても高い'
      }
    ]
  });
};