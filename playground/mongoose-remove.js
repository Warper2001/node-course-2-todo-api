const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//   console.log(result);
// })
//
Todo.findOneAndRemove({}).then((result) => {
  console.log(result);
})

// Todo.findByIdAndRemove('597b4e1d5e1062318f7a1b97').then((todo) => {
//   console.log(todo);
// })
