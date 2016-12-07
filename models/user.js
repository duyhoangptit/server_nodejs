var connection = require("../connection");

function User() {

// get list user
    this.getListUser = function (res) {
        connection.acquire(function (err, con) {
            con.query('select * from tbluser where enable = 1', function (err, result) {
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
                    res.send({status: 1, message: 'User creation failed'});
                } else {
                    res.send({status: 0, message: 'User created successfully'});
                }
            });
        });
    };
// update user by username
    this.updateUser = function (user, res) {
        connection.acquire(function (err, con) {
            con.query('update tbluser set (?,?,?,?) where id = ?', [user.username, user.password, user.email, user.id], function (err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'User update failed'});
                } else {
                    res.send({status: 0, message: 'User updated successfully'});
                }
            });
        });
    };
// delete user by username
    this.delete = function (username, res) {
        connection.acquire(function (err, con) {
            con.query('delete from tbluser where username = ?', [username], function (err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'Failed to delete'});
                } else {
                    res.send({status: 0, message: 'Deleted successfully'});
                }
            });
        });
    };

    this.pagination = function (index, pagesize, res) {
        connection.acquire(function (err, con) {
            // TODO set parameter
            con.query("SELECT *FROM tbluser LIMIT "+pagesize+" OFFSET "+ index, [], function (err, result) {
                con.release();
                if (err) {
                    console.log(err);
                    res.send({status: 1, message: 'Failed to get data pagination'});
                } else {
                    res.send(result);
                }
            })
        });
    }
}

module.exports = new User();