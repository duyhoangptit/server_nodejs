var connection = require("../connection");

function User() {

// get list user
    this.getListUser = function (res) {
        connection.acquire(function (err, con) {
            con.query('select * from tbluser', function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };
    this.createUser = function (user, res) {
        connection.acquire(function (err, con) {
            con.query('insert into tbluser set ?', [user], function (err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'TODO creation failed'});
                } else {
                    res.send({status: 0, message: 'TODO created successfully'});
                }
            });
        });
    };
// update user by username
    this.updateUser = function (user, res) {
        connection.acquire(function (err, con) {
            con.query('update tbluser set (?,?,?) where id = ?', [user.username, user.password, user.email, user.id], function (err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'TODO update failed'});
                } else {
                    res.send({status: 0, message: 'TODO updated successfully'});
                }
            });
        });
    };
// delete user by username
    this.delete = function (username, res) {
        connection.acquire(function (err, con) {
            con.query('delete from tbluser where id = ?', [username], function (err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'Failed to delete'});
                } else {
                    res.send({status: 0, message: 'Deleted successfully'});
                }
            });
        });
    };
}

module.exports = new User();