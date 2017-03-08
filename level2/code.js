var fs = require('fs');
var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

var articles = data.articles
var carts = data.carts
var deliveryFees = data.delivery_fees;

var result = {};

fs.writeFile('output.json', JSON.stringify(result, null, 2));
