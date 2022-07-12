import { WebSocket } from 'ws';
import { OpenSeaStreamClient } from "@opensea/stream-js";
import axios from 'axios';
import ethers from 'ethers';
import 'dotenv/config';

const client = new OpenSeaStreamClient({
    token: process.env.OPENSEA_TOKEN,
    connectOptions: {
        transport: WebSocket
    }
});

client.onItemTransferred('*', (event) => {
    console.log(event);
});
