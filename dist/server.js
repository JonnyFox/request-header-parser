"use strict";
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    var software = req.header('user-agent');
    if (software) {
        software = /\((.+?)\)/.exec(software)[1];
    }
    var language = req.header('accept-language');
    if (language) {
        language = /\w{2}-\w{2}/.exec(language)[0];
    }
    var result = {
        ipaddress: req.header('host'),
        language: language,
        software: software
    };
    res.json(result);
});
app.listen(8999);
//# sourceMappingURL=server.js.map