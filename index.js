const express = require('express')
const mysql = require('mysql2/promise')
const { Sequelize, DataTypes, DATE } = require('sequelize')

const app = express()
app.use(express.json())

const port = 8001

let conn = null

// function init connection mysql
const initMySQL = async () => {
  conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tutorial'
  })
}


// use sequenlize
const sequelize = new Sequelize('tutorial', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})

/* เราจะเพิ่ม code ส่วนนี้กัน */

const Picking = sequelize.define('Picking', {
    reftrans:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: { type: DataTypes.FLOAT },
    qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
  }, {});

// Listen
app.listen(port, async () => {
  await initMySQL()
  await sequelize.sync({ force: true })

  console.log('Server started at port 5000')
})