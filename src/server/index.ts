import https from 'https';
import app from './app';
import mongoose from 'mongoose';

const {HTTPS, PORT, MONGO_URI} = process.env;

const connect = async () => {
  if (!MONGO_URI) {
    throw new Error('MongoDB URI must be defined');
  }

  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }
};

const startServer = () => {
  const listener = () => {
    console.log(`Server listening on port ${PORT}`);
  };

  connect();

  if (HTTPS === 'true') {
    const options = {
      // key: fs.readFileSync(''),
      // cert: fs.readFileSync(''),
    };
    https.createServer(options, app).listen(PORT, listener);
  } else {
    app.listen(PORT, listener);
  }
};

startServer();
