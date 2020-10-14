const inviteCodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const codeLength = 5;


module.exports = function (sequelize, DataTypes) {
  const Grupo = sequelize.define("Grupo", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    invite_code: {
      type: DataTypes.STRING,
    }
    

  });

  return Grupo;
};



