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
    },
  });

  Grupo.associate = function (models) {
    Grupo.hasMany(User);
    Grupo.hasMany(Performance);
  };

  Grupo.addhook("beforeCreate", function (Grupo) {
    let invite_code = "";
    for (let i = 0; i < codeLength.length; i++) {
      const randomCode = Math.floor(Math.random() * inviteCodeChars.length);
      invite_code += inviteCodeChars[randomCode];
    }
  });

  return Grupo;
};
