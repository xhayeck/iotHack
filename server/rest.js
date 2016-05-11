'use strict'

const request = require('request-promise');
const auth = require('./auth.js');
const wsClient = require('websocket').client;

auth.fetch_uaa_token('master','admin','public_safety')
.then(function(res){
  var initialHeaders = auth.format_headers(res.access_token, 'public_safety');
  initialHeaders.uri += '/v1/assets/search?bbox=48.756272:-127.335155,17.067409:-60.362503';
  request(initialHeaders)
  .then(function(res){
    var target = 'http://ie-public-safety.run.aws-usw02-pr.ice.predix.io/v1/assets/1000000028/media';
    var data = JSON.parse(res);
    var client = new wsClient();
    data._embedded.assets.forEach((item, index) => {
        var url = item._links['search-media'].href.split('{')[0];
        url += '?media-types=VIDEO&start-ts=1262814734000&end-ts=1463001006374'
        url = url.replace('http:','https:');
        var options = {
          uri: url,
          headers: {
            'Authorization': initialHeaders.headers['Authorization'],
            'Predix-Zone-Id': initialHeaders.headers['Predix-Zone-Id']  
          }
        };
        console.log(item);
        request(options)
        .then(function(res){
          console.log(res);
          // var data = JSON.parse(res);
          // data._embedded.medias.forEach(function(item){
          //   console.log(item);
          // })
        })
        .catch(function(err){
          console.log(err);
        });
    });
  });
});