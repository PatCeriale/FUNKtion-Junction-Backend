module.exports = {
  HOST: 'us-cdbr-east-05.cleardb.net',
  USER: 'be7509ee88be0a',
  PASSWORD: '444001ba',
  DB: 'heroku_d735562e7808766',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  // Development config:
  // HOST: 'localhost',
  // USER: 'root',
  // PASSWORD: 'password',
  // DB: 'funktionjunction_db',
  // dialect: 'mysql',
  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000,
  // },
  // create MySQL table on ClearDB
  // mysql --host=us-cdbr-east-05.cleardb.net --user=be7509ee88be0a --password=444001ba --reconnect heroku_d735562e7808766
  // SQL script:
  // CREATE TABLE IF NOT EXISTS `people` (
  //   id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  //   title varchar(255) NOT NULL
  // ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
};
