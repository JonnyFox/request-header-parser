import * as express from 'express';

var app = express();
app.get('/api/whoami', (req, res) => {
    let software = req.header('user-agent');
    if (software) {
        software = /\((.+?)\)/.exec(software)[1];
    }

    let language = req.header('accept-language');
    if (language) {
        language = /\w{2}-\w{2}/.exec(language)[0];
    }

    let result = {
        ipaddress: req.header('host'),
        language: language,
        software: software
    }
    res.json(result);
});
app.listen(process.env.PORT);