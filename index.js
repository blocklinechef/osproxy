const { MongoClient } = require('mongodb');
const { WebSocket } = require('ws');
const { OpenSeaStreamClient } = require('@opensea/stream-js');
const axios = require('axios');
require('dotenv/config');

const osclient = new OpenSeaStreamClient({
    token: process.env.OPENSEA_TOKEN,
    connectOptions: {
        transport: WebSocket
    }
});

const mdbclient = new MongoClient(process.env.MONGODB_URI);

const db = mdbclient.db('opensea');

const itemMetaDataUpdated = async (event) => {
    await mdbclient.connect();
    const collection = db.collection(event.payload.collection.slug);
    collection.insertOne(event);
    console.log(event.payload.collection.slug);
};

const itemListed = async (event) => {
    await mdbclient.connect();
    const collection = db.collection(event.payload.collection.slug);
    collection.insertOne(event);
    console.log('itemListed');
};

const itemSold = async (event) => {
    await mdbclient.connect();
    const collection = db.collection(event.payload.collection.slug);
    collection.insertOne(event);
    console.log('itemSold');
};

const itemTransferred = async (event) => {
    await mdbclient.connect();
    const collection = db.collection(event.payload.collection.slug);
    collection.insertOne(event);
    console.log('itemTransferred');
};

const itemReceivedBid = async (event) => {
    await mdbclient.connect();
    const collection = db.collection(event.payload.collection.slug);
    collection.insertOne(event);
    console.log('itemReceivedBid');
};

const itemReceivedOffer = async (event) => {
    await mdbclient.connect();
    const collection = db.collection(event.payload.collection.slug);
    collection.insertOne(event);
    console.log('itemReceivedOffer');
};

const itemCancelled = async (event) => {
    await mdbclient.connect();
    const collection = db.collection(event.payload.collection.slug);
    collection.insertOne(event);
    console.log('itemCancelled');
};

osclient.onItemMetadataUpdated('*', itemMetaDataUpdated);
osclient.onItemListed('*', itemListed);
osclient.onItemSold('*', itemSold);
osclient.onItemTransferred('*', itemTransferred);
osclient.onItemReceivedBid('*', itemReceivedBid);
osclient.onItemReceivedOffer('*', itemReceivedOffer);
osclient.onItemCancelled('*', itemCancelled);
