//Please ReadmeFile befor Evaluation


const mongoose = require("mongoose");

// Replace the following link with you own Mongodb Cluster fo evaluation
mongoose
  .connect(
    "mongodb+srv://Bilawal:bil4397407@bilawal.hikwj.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Mongodb Database connected Successfully")
  })
  .catch(() => {
    console.log("Mongodb Database connectection Failure")
  })


  const Schema = new mongoose.Schema({
    email: {
      type: String,
      required: [true, "Please enter email"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
    }
})

const collection = mongoose.model('collection', Schema)

module.exports = collection