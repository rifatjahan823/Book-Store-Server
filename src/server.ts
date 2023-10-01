/* eslint-disable no-console */
// getting-started.js
import mongoose from 'mongoose'
import app from './app'
import config from './config'
import {Server} from 'http'


let server:Server

async function main() {
  try {
    await mongoose.connect(`${config.database_url}`)
   server= app.listen(config.port, async () => {
      console.log(`Listening Port ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
process.on('unhandledRejection',error=>{
 if(server){
  server.close(()=>{
    console.log(error);
    process.exit(1)
  })
 }else{
  process.exit(1)
 }
})

}

main().catch(err => console.log(err))


process.on('uncaughtException',error=>{
  console.log(error);
  process.exit(1)
})

process.on('SIGTERM',()=>{
  console.log('sigterm recieved')
  if(server){
    server.close(()=>{
      process.exit(1)
    })
  }else{
    process.exit(1)
  }
})