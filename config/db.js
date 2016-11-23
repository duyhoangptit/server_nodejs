/*db my sql*/
var sqlDb = require("mysql");

var settings = require("../setting");


exports.executeSql = function (sql, callback) {
    var connection = new sqlDb.createConnection(settings.dbConfig);
    connection.connect(function (error) {
        if(!!error){
           console.log("Error");
        }else{
            console.log("Connected");
        }
    });
}

