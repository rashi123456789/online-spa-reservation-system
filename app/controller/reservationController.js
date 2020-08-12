const Reservation = require('../models/reservation')

module.exports.list = (req, res) => {
    Reservation.find({ user:req.user._id})
        .then((reservation) => {
            res.json(reservation)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Reservation.findOne({_id:id,user:req.user._id})
        .then((reservation) => {
            if (reservation) {
                res.json(reservation)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const reservation = new Reservation(body)
    reservation.user=req.user._id
    reservation.save()
        .then((reservation) => {
            res.json(reservation)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Reservation.findOneAndUpdate({_id:id,user:req.user._id}, body, { new: true, runValidators: true })
        .then((reservation) => {
            res.json(reservation)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Reservation.findOneAndDelete({_id:id,user:req.user._id})
        .then((reservation) => {
            res.json(reservation)
        })
        .catch((err) => {
            res.json(err)
        })
}