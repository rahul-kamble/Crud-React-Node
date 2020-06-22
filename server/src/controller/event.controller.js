const EventService = require('./../services/event-service');

class EventController {

    static createEvent(req, res) {
        const id = req.params.id;
        EventService.createEvent(id).then(result => {
            res.status(200).send(result);
        }).catch(err => {
            res.status(500).send(err);
        })
    }

}

module.exports = EventController;