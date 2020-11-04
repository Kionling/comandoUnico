module.exports = function (sequelize, DataTypes) {
  const Performance = sequelize.define("Performance", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
  });

  Performance.associate = function (models) {
   Performance.belongsTo(models.Grupo, {
     foreignKey: {
       allowNull: false,
     },
   })
  };
  return Performance;
};
