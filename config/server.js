var http = require("http");
var user = require("../controller/user");
var settings = require("../setting");

http.createServer(function (req, resp) {
    switch (req.method){
        case "GET":
            if(req.url ==="/"){
                resp.end();
            }else if (req.url ==="/users"){
                 user.getList(req, resp);
            }
            break;
        case "POST":
            break;
        case "PUT":
            break;
        case "DELETE":
            break;
        default:
            break;
    }
}).listen(settings.webPort, function () {
    console.log("Connect database mysql successfully");
});