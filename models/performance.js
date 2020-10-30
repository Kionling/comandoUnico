module.exports = function (sequelize, DataTypes) {
  const Performance = sequelize.define("Performance", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });

  Performance.associate = function (models) {
   Performance.belongsTo(models.grupo, {
     foreignKey: {
       allowNull: false,
     },
   })
  };
  return Performance;
};
