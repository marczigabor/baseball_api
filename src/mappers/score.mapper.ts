import { Score } from "../models/score.model";

export class ScoreMapper{

    public static mapScore(obj: any): Score {

        let score: Score = new Score();

        if (obj){
            score.errors = obj.errors;
            score.hits = obj.hits;
            score.runs = obj.runs;
            score.leftOnBase = obj.leftOnBase;
        }

        return score;
    }
}