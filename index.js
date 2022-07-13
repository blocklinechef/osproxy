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
    const collection = db.collection('itemMetaDataUpdated');
    collection.insertOne(event);
    console.log('itemMetaDataUpdated');
};

const itemListed = async (event) => {
    await mdbclient.connect();
    const collection = db.collection('itemListed');
    collection.insertOne(event);
    console.log('itemListed');
};

const itemSold = async (event) => {
    await mdbclient.connect();
    const collection = db.collection('itemSold');
    collection.insertOne(event);
    console.log('itemSold');
};

const itemTransferred = async (event) => {
    await mdbclient.connect();
    const collection = db.collection('itemTransferred');
    collection.insertOne(event);
    console.log('itemTransferred');
};

const itemReceivedBid = async (event) => {
    await mdbclient.connect();
    const collection = db.collection('itemReceivedBid');
    collection.insertOne(event);
    console.log('itemReceivedBid');
};

const itemReceivedOffer = async (event) => {
    await mdbclient.connect();
    const collection = db.collection('itemReceivedOffer');
    collection.insertOne(event);
    console.log('itemReceivedOffer');
};

const itemCancelled = async (event) => {
    await mdbclient.connect();
    const collection = db.collection('itemCancelled');
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


//this is new change
