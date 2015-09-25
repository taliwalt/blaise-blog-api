var express = require ( 'express' ), //returns a function
  apiRouter = express.Router (),
  articlesController = require ( '../controllers/articles' ), //require the controller
  Article = require ( '../models/article' ); //require the model
  //no views bc this is just an api


apiRouter.route('/articles') //route method
  .post(articlesController.create)
  .get(articlesController.index)

module.exports = apiRouter;