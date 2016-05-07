var mysql = require('mysql');
var prompt = require('prompt');

var connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'bamazon'
});

connection.connect(function(err){
  if (err) throw err;
});

console.log('1. View Products For Sale');
console.log('2. View Low Inventory');
console.log('3. Add To Inventory');
console.log('4. Add New Product \n');

var prompter = true;

main();

function main(){
    prompt.start();
    prompt.get(['command'], function(err, result){

      if (err) throw err;

          switch (parseInt(result.command)) {
            case 1:
              viewProducts();
              break;
            case 2:
              viewLowInventory();
              prompter = false;
              break;
            case 3:
              addInventory();
              prompter = false;
              break;
            case 4:
              addProduct();
              prompter = false;
              break;
            default:
              console.log('bad input!');

          }
    });
}
function viewProducts(){
  connection.query('select * from products', function(err, res) {
    if (err) throw err;
    res.forEach(function(row){
      console.log(JSON.stringify(row, null, 2));
    });
    main();
  });
}
function viewLowInventory(){
  connection.query('select * from products where stock < 5', function(err, res){
    if(err) throw err;

    res.forEach(function(row){
      console.log(JSON.stringify(row, null, 2));
    });
    main();
  });
}
function addInventory(){

}
function addProduct(){

}
