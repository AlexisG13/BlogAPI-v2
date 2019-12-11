import mongoose from 'mongoose';
export function dbConnection() {
	try {
		mongoose.connect('mongodb://localhost/postAPI', {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
	} catch (error) {
		throw error;
	}
}
