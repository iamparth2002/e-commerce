import mongoose from 'mongoose';

export async function initMongoose() {
  if (mongoose.connection.readyState == 1) {
    return mongoose.connection.asPromise();
  }
  return await mongoose.connect(
    'mongodb+srv://iamparth2002:iamparth2002@cluster0.fdcgy8l.mongodb.net/ecommerce?retryWrites=true&w=majority'
  );
}
