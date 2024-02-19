const { updateSeatingById } = require('../models/events.models')

exports.patchSeatingById = (req, res, next) => {
  const { event_id } = req.params
  const { seats_sold } = req.body;
  updateSeatingById(seats_sold,event_id)
    .then((event) => {
      res.status(200).send({ event })
    })
    .catch((err) => {
      next(err)
    })
}