module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
   name : { type: DataTypes.STRING, allowNull : false}
 },{
    timestamps: false
   });

//  Customer.associate = function(models) {
//    Customer.hasMany(models.Burger, {
//    foreignKey: {
//        allowNull: true
//     },
//   });
// };

  Customer.sync();
  return Customer;
};