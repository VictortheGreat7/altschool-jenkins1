const express = require('express')
const app = express()
const port = 3000

// Array of user objects
const users = [
  { name: 'Bob', email: 'bob@gmail.com' },
  { name: 'Alice', email: 'alice@hotmail.com' },
  { name: 'Jake', email: 'jack@yahoo.com' },
  { name: 'Maria', email: 'maria@yahoo.com.uk' }
];

app.get('/', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})