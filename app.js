const path = require('path');
const cors = require('cors');
const express = require('express');
// const bodyParser=require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(cors());

const authRoutes = require('./routes/auth');
const gigRoutes = require('./routes/gigs');
const commentRoutes = require('./routes/comment');

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
  })
);


app.use('/auth', authRoutes);
app.use('/gigs', gigRoutes);
app.use(commentRoutes);

app.get('/', (req, res) => {
  res.send('Welcome')
})

mongoose.connect(
  'mongodb+srv://shwetagurnani:shweta@cluster0-rvik9.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
)
  .then(result => {
    console.log("Successfully connected");
    app.listen(3000);
  })
  .catch(err => {
    console.log("could not listen to 3000");
  });
