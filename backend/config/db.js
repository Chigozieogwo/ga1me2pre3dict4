import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(
      `MongoDB Connection :  Connected to <<<<< ${conn.connection.name} >>>>> <<<<<< ${conn.connection.host} >>>>>>`
        .cyan
    )
  } catch (error) {
    console.error(`Error : ${error.message}`.red)
    process.exit(1)
  }
}
export default connectDB
