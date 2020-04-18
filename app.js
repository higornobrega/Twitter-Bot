/**
 * Erro mais comun
 * Reveja as chaves ou os tokens e se estiver certo
 * Na guia Settings , altere o App permissions para Read, Write and Access direct messages
 */
const express = require('express');
const app = express();
var Twit = require('twit');

var T = new Twit({
    consumer_key:           '...',
    consumer_secret:        '...',
    access_token:           '...',
    access_token_secret:    '...',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
});
app.get('/', (req, res)=>{
    T.post('statuses/update',{ status: 'hello world of a bot with Node'}, function(err, data, response){
        console.log(data);
    });
});
app.listen(3000);