module.exports.jsonApi = (req, res) => {
  res.status(200);
  res.json({
    todo: [
      {
        task: 'go to bed',
        due: 'now',
        priority: 'very high'
      }
    ]
  });
};