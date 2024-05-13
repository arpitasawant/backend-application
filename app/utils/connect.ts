import mongoose, { ConnectOptions, mongo } from 'mongoose';
// import { appDatabase } from './users/user.schema';

interface CustomConnectOptions extends ConnectOptions {
    useNewUrlParser?: boolean;
    useUnifiedTopology?: boolean;
}
const connectParams : CustomConnectOptions ={
    useNewUrlParser:true,
    useUnifiedTopology:true
};

// appDatabase();
export const connectToDatabase = async () => {
    try {
        await mongoose.connect("mongodb+srv://arpitasawant:FT0yrsPyyxwH3KxK@restro-app.lo2uhbb.mongodb.net/restro-app?retryWrites=true&w=majority", connectParams);
        console.log("Database connected");
    } catch (error) {
        console.error(error);
        console.log("Database connection failed");
    }
};
