const faker = require('faker');
const { Review } = require('../../database/db.js');
const { User } = require('../../database/db.js');
const { Host } = require('../../database/db.js');

const userArray = [];
for (let i = 1; i <= 500; i += 1) {
  const userData = {};
  const userName = faker.name.firstName();
  const userimage = faker.image.avatar();
  userData.name = userName;
  userData.image = userimage;
  userArray.push(userData);
}

const hostArray = [];
for (let i = 1; i <= 100; i += 1) {
  const hostData = {};
  const hostName = faker.name.firstName();
  const hostImage = faker.image.avatar();
  hostData.hostName = hostName;
  hostData.hostImage = hostImage;
  hostArray.push(hostData);
}

const reviewsArray = [];
for (let i = 1; i <= 100; i += 1) {
  const selected = [];
  const numbReviews = Math.ceil(Math.random() * 100);
  for (let j = 0; j <= numbReviews; j += 1) {
    const userId = Math.ceil(Math.random() * 500);
    if (selected.indexOf(userId) !== (-1)) {
      continue;
    } else {
      selected.push(userId);
    }
    const hostRes = Math.random() >= 0.5;
    const longRev = Math.random() <= 0.25;
    const date = faker.date.recent(100);
    const now = new Date();
    const hostResDate = faker.date.between(date, now);
    const obj = {
      userId,
      date,
      body: longRev ? `${faker.lorem.paragraph()} ${faker.lorem.paragraph()}` : faker.lorem.paragraph(),
      // Math.random() * (max - min) + min
      rating: Math.floor(Math.random() * 3 + 3),
      cleanliness: Math.floor(Math.random() * 3 + 3),
      communication: Math.floor(Math.random() * 3 + 3),
      checkin: Math.floor(Math.random() * 3 + 3),
      accuracy: Math.floor(Math.random() * 3 + 3),
      location: Math.floor(Math.random() * 3 + 3),
      value: Math.floor(Math.random() * 3 + 3),
      quiRes: Math.random() >= 0.3,
      outHos: Math.random() >= 0.3,
      amaAme: Math.random() >= 0.3,
      stySpa: Math.random() >= 0.3,
      spaCle: Math.random() >= 0.3,
      hostId: i,
      // hostRes: faker.lorem.paragraph(),
      // hostResDate: hostResDate,
      hostRes: hostRes ? faker.lorem.paragraph() : null,
      hostResDate: hostRes ? hostResDate : null,
    };
    reviewsArray.push(obj);
  }
}

User.bulkCreate(userArray)
  .then(() => {
    console.log('Users data generated!');
    Host.bulkCreate(hostArray);
    console.log('Hosts data generated!');
  })
  .then(() => {
    console.log(reviewsArray);
    Review.bulkCreate(reviewsArray);
    console.log('Reviews data generated!');
  });
