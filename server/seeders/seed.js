const db = require('../config/connection');
const { Prank, User } = require('../models');
const pranksSeeds = require('./pranksSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  await Prank.deleteMany({});
  await Prank.create(pranksSeeds);
  await User.deleteMany({});
  await User.create(userSeeds);

  console.log('all done!');
  process.exit(0);
});