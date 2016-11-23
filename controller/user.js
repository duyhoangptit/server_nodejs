var db = require("../config/db");

// get list
exports.getList = function (req, resp) {
    db.executeSql("SELECT *FROM tbluser", function (data, err) {
        if (err) {
            resp.writeHead(500, "Internet Error", {"Content-Type": "text/html"});
        } else {
            resp.writeHead(200, {"Content-Type": "application/json"});
            resp.write(JSON.stringify(data));
        }
        resp.end();
    })
};
// get user by user id
exports.get = function (req, resp, userId) {
    db.executeSql("SELECT *FROM tbluser", function (data, err) {
        if (err) {
            resp.writeHead(500, "Internet Error", {"Content-Type": "text/html"});
        } else {
            resp.writeHead(200, {"Content-Type": "application/json"});
            resp.write(JSON.stringify(data));
        }
        resp.end();
    })
};
// add user
exports.add = function (req, resp, reqBody) {
    db.executeSql("SELECT *FROM tbluser", function (data, err) {
        if (err) {
            resp.writeHead(500, "Internet Error", {"Content-Type": "text/html"});
        } else {
            resp.writeHead(200, {"Content-Type": "application/json"});
            resp.write(JSON.stringify(data));
        }
        resp.end();
    })
};
// update user
exports.update = function (req, resp, reqBody) {
    db.executeSql("SELECT *FROM tbluser", function (data, err) {
        if (err) {
            resp.writeHead(500, "Internet Error", {"Content-Type": "text/html"});
        } else {
            resp.writeHead(200, {"Content-Type": "application/json"});
            resp.write(JSON.stringify(data));
        }
        resp.end();
    })
};
// delete user by username or user id
exports.delete = function (req, resp, userId) {
    db.executeSql("DELETE FROM tbluser WHERE username = ?", function (data, err) {
        if (err) {
            resp.writeHead(500, "Internet Error", {"Content-Type": "text/html"});
        } else {
            resp.writeHead(200, {"Content-Type": "application/json"});
            resp.write(JSON.stringify(data));
        }
        resp.end();
    })
};