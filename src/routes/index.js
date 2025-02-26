import express from "express";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'Pagina inicial'})
    })

    app.route('/ping').get((req, res) => {
        res.status(200).send({titulo: 'pong!'})
    })

    app.use(
        express.json(),
    )
}

export default routes;