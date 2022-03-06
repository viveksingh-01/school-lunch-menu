const express = require('express');
const router = express.Router();

const lunchWeekList = [
  {
    lunchWeekId: 1,
    weekOf: '2020-10-05',
    isPublished: true,
  },
  {
    lunchWeekId: 2,
    weekOf: '2020-10-12',
    isPublished: true,
  },
  {
    lunchWeekId: 3,
    weekOf: '2020-10-19',
    isPublished: false,
  },
];

router.get('/', (req, res) => {
  res.status(200).send(lunchWeekList);
});

router.get('/:lunchWeekId', (req, res) => {
  const id = parseInt(req.params.lunchWeekId);
  const lunchWeek = lunchWeekList.find((e) => e.lunchWeekId === id);
  console.log(lunchWeek);
  if (!lunchWeek) {
    return res.status(404).send('Requested data is not available.');
  }
  return res.status(200).send(lunchWeek);
});

module.exports = router;
