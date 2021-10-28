const development = require('./knexfile').development
const database = require('knex')(development) // ????

module.exports = {
  getAllPizza,
  getPizza,
  addOrder
}


function getAllPizza(db = database) {
  return db('pizzas')
    .select()
}

function getPizza(id, db = database) {
  return db('pizzas')
    .where('id', id)
    .select()
}

function addOrder(newObj, db= database){
  return db('orders')
  .insert(newObj)
}

