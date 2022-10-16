'use strict'
const client = require('./esconnection');

async function run () {
    // await client.index({
    //   index: 'game-of-thrones',
    //   id: '1',
    //   document: {
    //     character: 'Ned Stark',
    //     quote: 'Winter is coming.',
    //     isAlive: true
    //   }
    // })
  
    // await client.update({
    //   index: 'game-of-thrones',
    //   id: '1',
    //   doc: {
    //     isAlive: false
    //   }
    // })
  
    const document = await client.get({
      index: 'game-of-thrones',
      id: '1'
    })
  
    console.log(document)

    const result = await client.search({
        index: 'game-of-thrones',
        query: { match_all: {} }
      })
    
      console.log(result.hits.hits)
  }
  
  run().catch(console.log)