import express from "express";
import carsCatalog from "./carsCatalog.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'Pagina inicial'})
    })

    app.route('/ping').get((req, res) => {
        res.status(200).send({titulo: 'pong!'})
    })

    app.use(
        express.json(),
        carsCatalog
    )
}

export default routes;