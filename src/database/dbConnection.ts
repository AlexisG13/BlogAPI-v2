import mongoose from 'mongoose';
const db = mongoose
	.connect('mongodb://localhost/postAPI', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('Connected to mongodb'));

export function getConnection(){
	if (db) return db;
}
