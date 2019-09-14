import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import logger from "morgan";
import createError from "http-errors";
import { Express, Request, Response, NextFunction } from 'express-serve-static-core';
import  baseballRouter from "./routes/baseball.route";

//app
const app: Express = express();
const port = 8080; // default port to listen

// use
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


//router
const apiVersion = "/api/v1";
app.use(apiVersion + '/baseball', baseballRouter );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
});

app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
  
    res.send(err.message);
  });
  