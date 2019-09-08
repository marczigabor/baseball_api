import { GameMapper } from "./game.mapper";
import { Schedule } from "../models/schedule.model";


export class ScheduleMapper{

    public static mapSchedule(obj: any):Schedule {

        let schedule: Schedule = new Schedule();

        if (obj && obj.dates && Array.isArray(obj.dates) && 
            obj.dates[0] && obj.dates[0].games && Array.isArray(obj.dates[0].games)) {
            
            schedule.scores = obj.dates[0].games.map((game: any)=> GameMapper.mapGameScore(game) );
        }

        return schedule;
    }
}