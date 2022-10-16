'use strict'
const client = require('./esconnection');

async function run () {
    await client.index({
      index: 'game-of-thrones',
      id: '1',
      document: {
        character: 'Ned Stark',
        quote: 'Winter is coming.'
      }
    })
  
    const document = await client.get({
      index: 'game-of-thrones',
      id: '1'
    })
  
    console.log(document)
  }
  
  run().catch(console.log)