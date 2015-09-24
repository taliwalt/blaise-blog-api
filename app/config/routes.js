var express = require ( 'express' ),
  apiRouter = express.Router (),
  articlesController = require ( '../controllers/articles' ),
  Article = require ( '../models/articles' );

  apiRouter.route( '/articles')
    .get()
    .post();