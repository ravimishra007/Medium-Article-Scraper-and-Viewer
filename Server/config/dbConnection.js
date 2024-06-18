require('dotenv').config()


const mongoose = require('mongoose');
const dbToConnection = async () => {
try{
    await mongoose.connect(process.env.DB_URL)
    console.log('db connected')
}catch(err){
    console.log(err.message)
}  
}
module.exports = {dbToConnection}