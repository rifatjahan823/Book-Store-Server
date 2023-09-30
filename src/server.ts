/* eslint-disable no-console */
// getting-started.js
import mongoose from 'mongoose'
import app from './app';
import config from './config';

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    app.listen(config.port,async()=>{
        console.log(`Listening Port ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

main().catch(err => console.log(err))
