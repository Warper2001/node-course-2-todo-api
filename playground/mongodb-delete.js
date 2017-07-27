const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // })

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // })

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').deleteMany({name: 'Alex'}).then((result) => {
    console.log(result);
  })

  db.collection('Users').findOneAndDelete({_id: ObjectID('597a3d258218b73fa01c877e')}).then((result) => {
    console.log(result);
  })

// db.close()
})
