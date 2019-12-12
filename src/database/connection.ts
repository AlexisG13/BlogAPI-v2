import mongoose from 'mongoose';
export function dbConnection(): void {
  try {
    mongoose.connect('mongodb://localhost/postAPI', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    throw error;
  }
}
