const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

// imports the routers
const contactRouter = require('./routes/api/contact');

const path = require('path');

app.use(express.json());

// enable the routers
app.use('/api/contact', contactRouter);

// server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use('/', express.static(path.join(__dirname, '../client/build')));

  // load unwanted route here
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// default port
const port = process.env.PORT;

// app listen to port
app.listen(port, () => {
  console.log(`app started on port ${port}`);
});
