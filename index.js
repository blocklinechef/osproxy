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

const mdbclient = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true });

const itemMetaDataUpdated = async (event) => {
    console.log(event);
};

const itemListed = async (event) => {
    console.log(event);
};

const itemSold = async (event) => {
    console.log(event);
};

const itemTransferred = async (event) => {
    console.log(event);
};

const itemReceivedBid = async (event) => {
    console.log(event);
};

const itemReceivedOffer = async (event) => {
    console.log(event);
};

const itemCancelled = async (event) => {
    console.log(event);
};

osclient.onItemMetadataUpdated('*', itemMetaDataUpdated);
osclient.onItemListed('*', itemListed);
osclient.onItemSold('*', itemSold);
osclient.onItemTransferred('*', itemTransferred);
osclient.onItemReceivedBid('*', itemReceivedBid);
osclient.onItemReceivedOffer('*', itemReceivedOffer);
osclient.onItemCancelled('*', itemCancelled);