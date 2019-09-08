import { LineScore } from "../models/line-score.model";
import { InningMapper } from "./inning.mapper";
import { ScoreMapper } from "./score.mapper";

export class LineScoreMapper{

    public static mapLineScore(obj: any): LineScore {

        let lineScore: LineScore = new LineScore();

        if (obj.teams){
            lineScore.homeScore = ScoreMapper.mapScore(obj.teams.home);
            lineScore.awayScore = ScoreMapper.mapScore(obj.teams.away);
        }

        if (obj && obj.innings && Array.isArray(obj.innings)){

            lineScore.innings = obj.innings.map((inning: any)=> InningMapper.mapInning(inning) ); 
        }

        return lineScore;
    }
}