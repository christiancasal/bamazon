var mysql = require('mysql');
var prompt = require('prompt');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bamazon'
});

var print_products = function() {

    connection.query('select * from products', function(err, res) {
        if (err) throw err;

        var prompter = false

        res.forEach(function(row) {
          console.log(JSON.stringify(row, null, 2));

          prompter = true;
        });

        if(prompter){

          prompt.start();
          prompt.get(['id_to_buy', 'quantity'], function(err, res) {
              if (err) throw err;

              var user_wants = res.id_to_buy;
              var user_quantity = res.quantity;

              user_check_purchase(user_wants, user_quantity);
              prompter = false;
              print_products();
          });
        }
    });

}

var user_check_purchase = function(id, qt) {
    connection.query('select * from products where item_id = ' + id, function(err, res) {
        if (err) throw err;

        var check_product = res[0].stock - qt;

        if (check_product < 0) {
            console.log('insufficent stock!');
        } else {
            console.log('user may buy ' + res[0].product_name + "!")
            update_db_w_purch(id, res[0].stock);
        }
    });
}
var update_db_w_purch = function(id, quantity) {
    quantity = quantity - 1;
    console.log(quantity);
    connection.query('update products set stock = ' + quantity + ' where item_id = ' + id, function(err, res) {
        if (err) throw err;
        // console.log(res);
    });
}


connection.connect(function(err) {
    if (err) throw err;
    // print_products();
});

print_products();
