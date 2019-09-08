import { Inning } from "../models/inning.model";
import { ScoreMapper } from "./score.mapper";

export class InningMapper{

    public static mapInning(obj: any): Inning {

        let inning: Inning = new Inning();

        if (obj){
            inning.no = obj.num;
            inning.home = ScoreMapper.mapScore(obj.home);
            inning.away = ScoreMapper.mapScore(obj.away);
        }

        return inning;
    }
}