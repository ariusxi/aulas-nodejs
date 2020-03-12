'use strict'

module.exports = {

    register: (req, res) => {
        res.status(200).send(req.body)
    }

}