const mongoose = require('mongoose');
// const connectDB = (url) => {
//     return mongoose.connect(url, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true,
//     })
//   }
  const connectDB = async()=>{
      try {
        const conn = mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true 
          })
          console.log(`DB connect` );
      } catch (error) {
          console.log(error);
      }
  }
  module.exports = connectDB