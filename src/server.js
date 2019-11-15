const express = require('express');
const cors = require('cors');
const catRouter = require('./cat-endpoints/cat-router');
const dogRouter = require('./dog-endpoints/dog-router');
const personRouter = require('./person-endpoints/person-router');
const { PORT, CLIENT_ORIGIN } = require('./config');

const app = express();
app.use(cors({
  origin: CLIENT_ORIGIN
}));

app.use('/api/cats', catRouter);
app.use('/api/dogs', dogRouter);
app.use('/api/person', personRouter);

// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(PORT,()=>{
  console.log(`Serving on ${PORT}`);
});