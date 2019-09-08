import { Request, Response, NextFunction } from 'express-serve-static-core';
import request from "request";
import { parseString } from "xml2js";
import { ScheduleMapper } from '../mappers/schedule.mapper';
import { LineScoreMapper } from '../mappers/line.score.mapper';

// const baseUri: string = "http://gd2.mlb.com/";
// const gameUri: string = "components/game/mlb/";
// const gameIdPrefix: string = "gid_";

const baseUrl: string = "http://statsapi.mlb.com/api/v1/";


const baseball_controller = {

    async lineScore_get(req: Request, res: Response, next: NextFunction): Promise<void> {

        //http://statsapi.mlb.com//api/v1/game/529572/linescore
        
        const url = `${baseUrl}game/${req.query.game_id}/linescore`;

        request(url, (error: any, response: request.Response, body: any): void =>{

            try {

                if (response.statusCode == 200){

                    //console.log(result);
                    res.send(LineScoreMapper.mapLineScore(JSON.parse(body)));
                    res.send(body);
                  
                }else {
                    let errorObject = new Error(error || response.statusMessage);
                    next(errorObject);
                }
            }catch (err){
                next(err);
            }            
        });
    },

    async schedule_get(req: Request, res: Response, next: NextFunction): Promise<void> {

        //http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1&date=04/10/2018
        console.log(`year: ${req.query.year} month: ${req.query.month} day: ${req.query.day}`);

        const url =`${baseUrl}schedule/games/?sportId=1&date=${getDateUrlPart(req.query.year, req.query.month, req.query.day)}`

        request(url, (error: any, response: request.Response, body: any): void =>{

            try {

                if (response.statusCode == 200){

                    //console.log(result);
                    res.send(ScheduleMapper.mapSchedule(JSON.parse(body)));
                  
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

const getDateFromGameId = (gameId: string ): Date => {
    const year:number = Number(gameId.substr(0,4));
    const month: number = Number(gameId.substr(5,2));
    const day: number = Number(gameId.substr(8,2));

    return new Date(year, month, day);
}

const getDateUrlPart = (year: number, month: number, day: number): string=> {
    return `${month.toString().padStart(2, "0")}/${day.toString().padStart(2, "0")}/${year.toString()}`;
}

export default baseball_controller;