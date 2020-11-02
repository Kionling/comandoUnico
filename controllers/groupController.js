const db = require("../models");

module.exports = {
    getUserInfo(req, res) {
        if(!req.user) {
            return req.status(401).end();
            //unauthorized server response if the correct user is not signed in 
        }
        db.Grupo.findOne({
            where: { id: req.user.GrupoId},
            include: db.User,

        })
        .then( grupo => {
            return res.json({
                name: grupo.name,
                invite_code: grupo.invite_code,
                members: grupo.Users.map(user => ({ id: user.id, name: user.name, color: user.color}))
            })
        })
        .catch( err => {
            console.log(err)
            res.status(500).end()
        })
    },
    getMembers(req,res) {
        db.User.findAll({ where: { GrupoId: req.user.GrupoId}})
        .then( data => res.json( 
            data.map((row) => ({
                id: row.dataValues.id, 
                name: row.dataValues.name,
                color: row.dataValues.color
            }))
        ))
        .catch(err => {
            console.log(err)
            res.status(500).end();
        })
    }
}