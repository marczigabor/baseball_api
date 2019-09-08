import { Pitcher } from "../models/pitcher.model";

export class PitcherMapper{


    public static mapPitcher(obj: any):Pitcher {

        let pitcher: Pitcher = new Pitcher();

        if (obj && Array.isArray(obj) &&  obj[0] && obj[0].$) {

            if (obj[0].$.wins){
                pitcher.wins = obj[0].$.wins;
            }
            
            if (obj[0].$.losses){
                pitcher.losses = obj[0].$.losses;
            }

            if (obj[0].$.saves){
                pitcher.saves = obj[0].$.saves;
            }

            if (obj[0].pitcher && Array.isArray(obj[0].pitcher) && obj[0].pitcher[0] && obj[0].pitcher[0].$){
                pitcher.name = obj[0].pitcher[0].$.name;
            }
        }

        return pitcher;
    }
}