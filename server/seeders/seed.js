const db = require('../config/connection');
const { Prank } = require('../models');
const pranksSeeds = require('./pranksSeeds.json');

db.once('open', async () => {
  await Prank.deleteMany({});
  await Prank.create(pranksSeeds);

  console.log('all done!');
  process.exit(0);
});