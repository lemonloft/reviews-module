var faker = require('faker');

// const db = require('../../database/db.js').db;
const Review = require('../../database/db.js').Review;
const User = require('../../database/db.js').User;
const Host = require('../../database/db.js').Host;

var userArray = [];
for (let i = 1; i <= 500; i++) {
    var userData = {};
    var userName = faker.name.firstName();
    var userimage = faker.image.avatar();
    userData.name = userName;
    userData.image = userimage;

    userArray.push(userData);
    // User.create(userData);
}

var hostArray = [];
for (let i = 1; i <= 100; i++) {
    var hostData = {};
    var hostName = faker.name.firstName();
    var hostImage = faker.image.avatar();
    hostData.hostName = hostName;
    hostData.hostImage = hostImage;

    hostArray.push(hostData);
    // Host.create(hostData);
}

var reviewsArray = [];
for (let i = 1; i <= 100; i++) { // host 1 to 100
    var selected = [];
    var numbReviews = Math.ceil(Math.random() * 100);
    for (let j = 0; j <= numbReviews; j++) {
        var userId = Math.ceil(Math.random() * 500);
        if (selected.indexOf(userId)) {
            continue;
        } else {
            selected.push(userId);
        }
        var date = faker.date.recent(100);
        var now = new Date();
        var hostResDate = faker.date.between(date, now);
        var obj = {
            userId: userId,
            date: date,
            body: faker.lorem.paragraph,
            rating: Math.floor(Math.random() * 6),
            cleanliness: Math.floor(Math.random() * 6),
            communication: Math.floor(Math.random() * 6),
            checkin: Math.floor(Math.random() * 6),
            accuracy: Math.floor(Math.random() * 6),
            location: Math.floor(Math.random() * 6),
            value: Math.floor(Math.random() * 6),
            quiRes: Math.random() >= 0.5,
            outHos: Math.random() >= 0.5,
            amaAme: Math.random() >= 0.5,
            stySpa: Math.random() >= 0.5,
            spaCle: Math.random() >= 0.5,
            hostId: i,
            hostRes: faker.lorem.paragraph,
            hostResDate: hostResDate,
        }
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
        Review.bulkCreate(reviewsArray);
        console.log('Reviews data generated!');
    });