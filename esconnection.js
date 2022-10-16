const { Client } = require('@elastic/elasticsearch')

const client = new Client({
  node: 'https://localhost:9200',
  auth: {
    username: 'elastic',
    password: '_DgCXE*KbtUd3SZN=nC6'
  },
  tls: {
    // might be required if it's a self-signed certificate
    rejectUnauthorized: false
  }
})

module.exports = client;
