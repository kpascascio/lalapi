const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
})

// authenitcate returns a promise
sequelize.authenticate()
    .catch(err => console.log(err))
    .then(()=>{console.log('Connected to the database!')})

// const Kids = sequelize.import('./models/Kids');


module.exports = sequelize