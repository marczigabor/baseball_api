import { Request, Response, NextFunction } from 'express-serve-static-core';
import request from "request";
import { parseString } from "xml2js";

const baseUri: string = "http://gd2.mlb.com/";
const gameUri: string = "components/game/mlb/";
const gameIdPrefix: string = "gid_";

const baseball_controller = {

    async boxscore_get(req: Request, res: Response, next: NextFunction): Promise<void> {
        
        res.send("ok");
    },

    async scoreboard_get(req: Request, res: Response, next: NextFunction): Promise<void> {

        console.log(`year: ${req.query.year} month: ${req.query.month} day: ${req.query.day}`);

        const url = baseUri + gameUri + getDateUrlPart(req.query.year, req.query.month, req.query.day) + "scoreboard.xml";

        request(url, (error: any, response: request.Response, body: any): void =>{

            try {

                if (response.statusCode == 200){

                    parseString(body, (err, result)=> {
                        console.log(result);
                        res.send(result);
                    });

                  
                }else {
                    let errorObject = new Error(error || response.statusMessage);
                    next(errorObject);
                }
            }catch (err){
                next(err);
            }            
        });
    }
}

const getDateUrlPart = (year: number, month: number, day: number): string=> {
    return `year_${year}/month_${month.toString().padStart(2, "0")}/day_${day.toString().padStart(2, "0")}/`;
}

export default baseball_controller;