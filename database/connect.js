import mongoose from "mongoose"

const connectMongo = async()=> {
    try {
        const{connection} = await mongoose.connect(process.env.MONGO_URI)
        if (connection.readyState==1){
            console.log("Connected to MongoDB")
        }

            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
        
        // console.log("Connected to MongoDB")
    } catch (error) {
        return Promise.reject(error)
    }
}

export default connectMongo;