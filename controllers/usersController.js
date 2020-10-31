const db = require("../models");

module.exports = {
  signup(req, res) {
    db.Grupo.create({
      name: req.body.name + " Member of Comando Unico.",
    })
      .then((newGrupo) => {
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
      })
      .catch((err) => {
        res.status(401).send(err.name);
      });
  },
  login(req, res) {
      if (req.user) {
          res.status(200).end();
      } 
      else {
          res.status(401).end();
      }
  },
  logout(req, res) {
      res.logout();
      res.redirect("/")
  },
  getMembers(req, res){
      db.User.findAll({ where: { GrupoId: req.user.GrupoId }})
      .then(data => res.json(
          data.map((row) => ({
              id: row.dataValues.id,
              name: row.dataValues.name,
              color: row.dataValues.color,
          }))
      ))
      .catch( err => {
          res.status(500).end();
      })
  },
  getInv(req, res) {
      db.User.findOne({ where: { id: req.query.id}})
      .then( data => res.json(data.invite_code))
      .catch(err => { res.status(500).end()})
  }

};
