'use strict'
const client = require('./esconnection');

const indexName = "es-example";

async function run () {
    
    let isExists = await client.indices.exists({index:indexName})
    console.log(isExists);
    if (!isExists){
      await client.indices.create({
        index: indexName,
        mappings: {
          properties: {
              // id: { type: 'integer' },
              site: { type: 'text' },
              cssSelector: { type: 'text' },
              title: { type: 'text' },
              text: { type: 'text' },
              //keywords: { type: 'text'},
              sended: { type: 'boolean' }
              // createdAt: { type: 'date'}
          }
        }
      }, { ignore: [400] });
    let isExists = await client.indices.exists({index:indexName})
    console.log(isExists);
    }

}

run().catch(console.log)