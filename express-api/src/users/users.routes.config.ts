import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {
        // Route configuration
        this.app.route('/users')
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`List of Dummy Users!`)
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send(`Post to users`)
            })
        this.app.route('/users/:userId')
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next()
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`Get request for id ${req.params.userId}`)
            })
            .put((req: express.Request, res: express.Response) => {
                res.status(200).send(`Put request for id ${req.params.userId}`)
            })
            .patch((req: express.Request, res: express.Response) => {
                res.status(200).send(`Patch request for id ${req.params.userId}`)
            })
            .delete((req: express.Request, res: express.Response) => {
                res.status(200).send(`Delete request for id ${req.params.userId}`)
            });

        return this.app;
    }
}
