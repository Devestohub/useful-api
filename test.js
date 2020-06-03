/*
Author: Hugovidafe (Hugo.vidal.ferre@gmail.com)
(c) 2020 TheMorFun
Created:  2020-06-03T20:47:27.301Z
Modified: 2020-06-03T20:50:15.664Z
*/

const api = require('./src');
const Api = new api.Api( { id: "213" } );

console.log(Api.user_id);

