var user = require('../user.js')

module.exports = {
    getName: function(req, res, next) {
       response.status(200).send(name);
    },
    getLocation: function(req, res, next){
        response.status(200).send(location);
    },
    getOccupations: function(req, res, next){
        response.status(200).send(occupation);
    },
    getLatestOccupation: function(req, res, next){
        var latest = occupations[0]
        response.status(200).send(latest)
    },
    

    
}