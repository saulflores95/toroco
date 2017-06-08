const db = require('../models')

const labController = {}

labController.post = (req, res) => {
  const {
    name,
    img,
    position,
    phone,
    tag,
    email,
    userId
  } = req.body

  const lab = new db.Lab({
    name,
    email,
    img,
    position,
    phone,
    tag,
    _creator: userId
  })

  lab.save().then(newLab => {
    return res.status(200).json({
      success: true,
      data: newLab
    })
  }).catch((err) => {
    return res.status(500).json({
      message: err
    })
  })
}

labController.getAll = (req, res) => {
  db.Lab.find({}).populate({
    path: '_creator',
    select: 'username createdAt -_id'
  }).then((lab) => {
    return res.status(200).json({
      succes: true,
      data: lab
    })
  }).catch((err) => {
    return res.status(500).json({
      message: err
    })
  })
}

module.exports = labController
