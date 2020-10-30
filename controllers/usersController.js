const db = require("../models");

module.exports = {
  signup(req, res) {
    db.Grupo.create({
      name: req.body.name + " Member of Comando Unico.",
    }).then((newGrupo) => {
      return db.User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        GrupoId: newGrupo.id,
        color: req.body.color,
      });
    })
    .then(() => {
        res.redirect(307, "/api/users/login");
    }).catch(err => {
        res.status(401).(err.name);
    })
  },
};
