// connection to our database.
import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    mongoose.set('strictQuery', false);
    const connect = await mongoose.connect('mongodb+srv://donaldakite27:YbfWBSdz8RXfI6Dm@cluster0.nnvh1j3.mongodb.net/?retryWrites=true&w=majority', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(`Errors: ${error.message}`);
  }
};

export default connectToDatabase;
