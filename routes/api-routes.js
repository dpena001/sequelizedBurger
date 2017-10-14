// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

module.exports = function(app) {

    // Create all our routes and set up logic within those routes where required.
       app.get("/", function(req, res) {
        var query = {};
          if (req.query.customerid) {
             query.CustomerId = req.query.customerid;
           }
          db.Burger.findAll({
             include: [{ model: db.Customer, as: 'Customer'}],
             order:['burger_name'],
         }).then(function(data) {
      // We have access to the todos as an argument inside of the callback function
          
          res.render("index",{burgers:data});
    });
  });


  app.post("/", function(req, res) {
    
    console.log(req.body.burger_name);

    db.Burger.create({
      burger_name: req.body.burger_name,
      date: Date.now(),
    }).then(function(dbTodo) {
      // We have access to the new todo as an argument inside of the callback function
      res.redirect("/");
    });
 });

 app.put("/:id", function(req, res) {

   db.Customer.create({
      name: req.body.customer_name

     }).then(function(data){
       db.Burger.update({
          devoured: true,
          CustomerId: data.get('id')
       }, {
         where: {
          id: req.params.id
       }
     }).then(function(dbTodo) {
     res.redirect("/");
    });

   }); 
});

};



