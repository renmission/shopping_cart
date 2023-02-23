const express = require('express');
const cookieParser = require('cookie-parser');
const AppError = require('./utils/appError');
const cors = require('cors');

// Routers
const productRouter = require('./routes/productRoutes');
const cartRouter = require('./routes/cartRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(cors());
// body parser, reading data from the req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/v1/products', productRouter);
app.use('/api/v1/carts', cartRouter);
app.use('/api/v1/users', userRouter);

// handle undefined routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

module.exports = app;
