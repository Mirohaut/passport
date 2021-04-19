'use strict';
const express = require('express');
<<<<<<< HEAD
const cookieParser = require('cookie-parser');
const session = require('express-session');
// add following to about line 4
const passport = require('./utils/pass');
const app = express();
const port = 3000;

// add following after const port = 3000;
const loggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/form');
  }
};

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const username = 'foo';
const password = 'bar';

app.use(cookieParser());
app.use(session({
  secret: 'jottain',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 60 * 60 * 24},
}));

// add following after app.use(session...
app.use(passport.initialize());
app.use(passport.session());

app.set('views', './views');
app.set('view engine', 'pug');

// älä tee näin projektissa

=======
const cors = require('cors');
const bodyParser = require('body-parser');
const rootRoute = require('./routes/rootRoute');
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');
const passport = require('./utils/pass');
const authRoute = require('./routes/authRoute');
const app = express();
const port = 3000;
const loggedIn = (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.redirect('/form');
    }
  };
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('week2_public_html'));
app.use(express.static('uploads'));
app.use(passport.initialize());
app.use(passport.session());

>>>>>>> fedcfe7fa7de04226ef8012f76017473e8e0cd50
app.post('/login',
    passport.authenticate('local', {failureRedirect: '/form'}),
    (req, res) => {
      console.log('success');
      res.redirect('/secret');
    });
<<<<<<< HEAD

// älä tee näin projektissa

=======
//test
// modify app.get('/secret',...
>>>>>>> fedcfe7fa7de04226ef8012f76017473e8e0cd50
app.get('/secret', loggedIn, (req, res) => {
  res.render('secret');
});

<<<<<<< HEAD
// älä tee näin projektissa

app.get('/form', (req, res) => {
  res.render('form');
});

app.get('/secret', (req, res) => {
  if (req.session.kirjautunut) {
    res.render('secret');
  } else {
    res.redirect('/form');
  }
});

// älä tee näin projektissa

app.get('/setCookie/:clr', (req, res) => {
  res.cookie('color', req.params.clr, {httpOnly: true}).send('cookie set');
});

app.get('/readCookie', (req, res) => {
  console.log('Cookies: ', req.cookies.color);
  res.send('cookie read');
});

// älä tee näin projektissa

app.get('/deleteCookie', (req, res) => {
  res.clearCookie('color');
  res.send('cookie deleted');
});

// älä tee näin projektissa
=======
// routes
// app.use('/', rootRoute);
app.use('/auth', authRoute);
app.use('/cat', passport.authenticate('jwt', {session: false}), catRoute);
app.use('/user', passport.authenticate('jwt', {session: false}), userRoute);
>>>>>>> fedcfe7fa7de04226ef8012f76017473e8e0cd50

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
