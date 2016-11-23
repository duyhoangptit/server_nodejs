var user = require('./models/user');

module.exports = {
    configure: function(app) {
        app.get('/user/', function(req, res) {
            user.getListUser(res);
        });

        app.post('/user/', function(req, res) {
            user.createUser(req.body, res);
        });

        app.put('/user/', function(req, res) {
            user.updateUser(req.body, res);
        });

        app.delete('/user/:id/', function(req, res) {
            user.delete(req.params.id, res);
        });
    }
};