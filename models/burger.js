
'use strict';

// Export the database functions for the controller (burgers_Controller.js).


module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: { type: DataTypes.STRING, allowNull : false},
    devoured: { type: DataTypes.BOOLEAN, defaultValue: false}, 
    date: { type: DataTypes.DATE, allowNull : false}
  },{
    timestamps: false
  });


  Burger.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Burger.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  Burger.sync();
  return Burger;
};