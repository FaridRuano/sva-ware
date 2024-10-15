import mongoose from 'mongoose'

const connectMongoDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        return mongoose.connection.getClient()
    }

    return mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

export default connectMongoDB
