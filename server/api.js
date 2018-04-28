const router = require('express').Router();

const data = require('./data.json').streamers;

const getData = (query) => {
  const filter = query.filter || '';
  const startFrom = parseInt(query.startFrom, 10) || 0;
  const maxCount = parseInt(query.maxCount, 10) || 100;

  const filtered = data.filter(item => item.openID.includes(filter));
  const total = filtered.length;
  return {
    total,
    startFrom,
    data: filtered.slice(startFrom, startFrom + maxCount),
  };
};

router.get('/products', (req, res) => {
  res.json(getData(req.query));
});

module.exports = router;
