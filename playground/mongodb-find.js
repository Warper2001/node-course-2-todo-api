const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


// db.collection('Todos').find({
//     _id: new ObjectID('597a3c3d1f4b513f6624807f')})
//     .toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to fetch todos',err);
// })

// db.collection('Todos').find().count().then((count) => {
//   console.log(`Todos: ${count}`);
// }, (err) => {
//   console.log('Unable to fetch todos',err);
// })

db.collection('Users').find({name: 'Alex'}).toArray().then((docs) => {
  console.log('Users');
  console.log(JSON.stringify(docs, undefined, 2))
})

// db.close()
})
