const { Nuxt } = require('nuxt');
const express = require('express');
const config = require('./nuxt.config')

const app = express();
const PORT = 3000;

const nuxt = new Nuxt(config);

// function handleRequest (req, res) {
//     res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
//     nuxt.renderRoute('/')
//     .then(result => {
//         console.log('result.html: ', result.html);
//         res.send(result.html);
//     })
//     .catch(error => {
//         res.send(e);
//     })
// }

// app.get('*', handleRequest);

app.use(nuxt.render);

app.listen(PORT, function () {
    console.log(`Server listing port: ${PORT}`)
    console.log('arguments: ', arguments)
});

// exports.ssrapp