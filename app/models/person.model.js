module.exports = (sequelize, Sequelize) => {
  const Person = sequelize.define('person', {
    title: {
      type: Sequelize.STRING,
    },
  });

  return Person;
};
