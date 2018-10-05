const R = require('ramda');
const MongoClient = require('mongodb').MongoClient;
const { DB_HOST, DB_PORT, DB_NAME } = require('../config.js');

const { Task } = require('../utils');

console.log(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);

const Mongo = {
  create(collection) {
    return Object.assign(Object.create(this), {
      collection,
      client: null
    })
  },

  connect() {
    return new Task((rej, res) => {
      MongoClient.connect(`mongodb://${DB_HOST}:${DB_PORT}`, { useNewUrlParser: true })
        .then(res)
        .catch(rej);
    })
      .map((client) => {
        this.client = client;
        return client.db(DB_NAME).collection(this.collection)
      })
  },

  close(data) {
    this.close();
    return data;
  },
};

Mongo.close = Mongo.close.bind(Mongo);

module.exports = Mongo;
