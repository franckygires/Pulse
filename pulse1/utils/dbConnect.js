import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    // const db = await mongoose.connect(process.env.MONGO_URI, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // });

    // mongodb+srv://root:root@cluster0.1jr5u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    const db = mongoose.connect("mongodb+srv://root:root@cluster0.1jr5u.mongodb.net/pulse?retryWrites=true&w=majority", {
      useNewUrlParser: "true",
      useUnifiedTopology: "true",
    });

    //connection.isConnected = db.connections[0].readyState;

}

export default dbConnect;



