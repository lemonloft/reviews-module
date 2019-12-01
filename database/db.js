const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('LemonLoft', 'loftuser', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Review = sequelize.define('reviews', {
  '_id': {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  // 'userId': {
  //   type: Sequelize.INTEGER,
  // },
  'date': {
    type: Sequelize.DATE,
  },
  'body': {
    type: Sequelize.STRING(5000),
  },
  'rating': {
    type: Sequelize.INTEGER,
  },
  'cleanliness': {
    type: Sequelize.INTEGER,
  },
  'communication': {
    type: Sequelize.INTEGER,
  },
  'checkin': {
    type: Sequelize.INTEGER,
  },
  'accuracy': {
    type: Sequelize.INTEGER,
  },
  'location': {
    type: Sequelize.INTEGER,
  },
  'value': {
    type: Sequelize.INTEGER,
  }, 
  'quiRes': {
    type: Sequelize.BOOLEAN,
  }, 
  'outHos': {
    type: Sequelize.BOOLEAN,
  }, 
  'amaAme': {
    type: Sequelize.BOOLEAN,
  }, 
  'stySpa': {
    type: Sequelize.BOOLEAN,
  }, 
  'spaCle': {
    type: Sequelize.BOOLEAN,
  }, 
  // 'hostId': {
  //   type: Sequelize.INTEGER,
  // }, 
  'hostRes': {
    type: Sequelize.STRING(5000),
  },
  'hostResDate': {
    type: Sequelize.DATE,
  },
}, {
  // options
});

const User = sequelize.define('users', {
  '_id': {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  'name': {
    type: Sequelize.STRING(40)
  },
  'image': {
    type: Sequelize.STRING(100)
  }
}, {
  // options
});

Review.belongsTo(User);

const Host = sequelize.define('hosts', {
  '_id': {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  'hostName': {
    type: Sequelize.STRING(40)
  },
  'hostImage': {
    type: Sequelize.STRING(100)
  }
}, {
  // options
});

Host.hasMany(Review);

module.exports.db = sequelize;
module.exports.Review = Review;
module.exports.User = User; 
module.exports.Host = Host; 