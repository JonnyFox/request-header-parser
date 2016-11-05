"use strict";
var express = require('express');
var app = express();
app.get('/api/whoami', function (req, res) {
    var software = req.header('user-agent');
    if (software) {
        software = /\((.+?)\)/.exec(software)[1];
    }
    var language = req.header('accept-language');
    if (language) {
        language = /\w{2}-\w{2}/.exec(language)[0];
    }
    var result = {
        ipaddress: req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress,
        language: language,
        software: software
    };
    res.json(result);
});
app.get('/*', function (req, res) {
    res.redirect('/api/whoami');
});
app.listen(process.env.PORT);
//# sourceMappingURL=server.js.map