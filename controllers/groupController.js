const db = require("../models");
const grupo = require("../models/grupo");

module.exports = {
  getUserInfo(req, res) {
    if (!req.user) {
      return req.status(401).end();
      //unauthorized server response if the correct user is not signed in
    }
    db.Grupo.findOne({
      where: { id: req.user.GrupoId },
      include: db.User,
    })
      .then((grupo) => {
        return res.json({
          name: grupo.name,
          invite_code: grupo.invite_code,
          members: grupo.Users.map((user) => ({
            id: user.id,
            name: user.name,
            color: user.color,
          })),
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  },
  getMembers(req, res) {
    db.User.findAll({ where: { GrupoId: req.user.GrupoId } })
      .then((data) =>
        res.json(
          data.map((row) => ({
            id: row.dataValues.id,
            name: row.dataValues.name,
            color: row.dataValues.color,
          }))
        )
      )
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  },
  getInviteCode(req,res) {
    db.Grupo.findOne({ where: { id: req.query.id}})
    .then( data => res.json(data.invite_code))
    .catch(err => {
      res.status(500).end();
    })
  },
  joinGrupo(req, res){
    if(!req.user){
      return res.status(401).end();
    }
    db.Grupo.findOne({ where: { invite_code: req.query.invite_code}})
    .then(grupo => {
      if(!grupo){
        res.status(403).end();
      } else {
        db.User.update({
          GrupoId: GrupoId.id,
        })
      }
    }) 
  },
  leaveGrupo(req, res) {
    if(!req.User) {
      res.status(401).end();
    }
    db.Grupo.destroy({ where: {id: req.query.GrupoId}}).then( grupo => {
      if(!grupo){
        res.status(403).end();
      } else {
        db.User.update({
          GrupoId: GrupoId.id,
        })
      }
    })
  }
};
