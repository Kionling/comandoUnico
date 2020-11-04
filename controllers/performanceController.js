const { where } = require("sequelize/types");
const db = require("../models");

module.exports = {
  create(req, res) {
    db.Performance.create({
      Performance: req.body.Performance,
      GrupoId: req.user.GrupoId,
      UserId: req.body.UserId,
    })
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  update(req, res) {
    db.Performance.update(
      {
        Performance: req.body.Performance,
        UserId: req.body.UserId,
      },
      {
        where: { id: req.query.id },
      }
    )
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.status(500).end();
      });
  },
  delete(req, res) {
    db.Performance.destroy({ where: { id: req.query.id } })
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.status(500).end();
      });
  },
};
