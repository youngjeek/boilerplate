const express = require('express');
const app = express();
const port = 5000;

//mongoose objectModeling Tool을 활용 mongoDB
const urlDB =
  'mongodb+srv://boilerplate:zlLgj0J3mZwlEkuY@boilerplate.mdpyam6.mongodb.net/?retryWrites=true&w=majority';

const mongoose = require('mongoose'); //$npm install mongoose --save
mongoose.set('strictQuery', true);
mongoose
  .connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Connected !!'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//from https://expressjs.com/en/starter/hello-world.html
//터미널에 $node index.js  대신에~~~ npm init을 했으므로 package.json script에 "start":"node index.js", 입력 후
//$npm run start를 사용가능
