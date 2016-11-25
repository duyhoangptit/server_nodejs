var user = require('./models/user');

module.exports = {
    configure: function(app) {
        app.get('/findAllUser/', function(req, res) {
            user.getListUser(res);
        });

        app.get('/findUser/:username/', function(req, res) {
            user.getListUser(res);
        });


        app.post('/createUser/', function(req, res) {
            console.log(req.body);
            user.createUser(req.body, res);
        });

        app.post('/updateUser/', function(req, res) {
            user.updateUser(req.body, res);
        });

        app.get('/removeUser/:username', function(req, res) {
            user.delete(req.params.username, res);
        });
    }
};