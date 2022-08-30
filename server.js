const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const port = process.env.PORT || 3005;
const dburi  = process.env.ATLAS_URI;

mongoose.connect(dburi, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => console.log("MongoDB connection established successfully"));

//Routers
const productRouter  = require('./routes/productRoute');
const userRouter  = require('./routes/userRoute');
const authRouter  = require('./routes/authRoute');
const cartRouter  = require('./routes/cartRoute');
const orderRouter  = require('./routes/orderRoute');
const stripePayment  = require('./routes/stripePayment');
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/carts', cartRouter);
app.use('/api/orders', orderRouter);
app.use('/api/checkout', stripePayment);

app.use(express.static(path.join(__dirname, "/dream-frontend/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dream-frontend/build', 'index.html'));
});


app.listen(port, () => {
    console.log("Server runing in port " + port);
})


