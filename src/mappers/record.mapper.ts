import { Record } from "../models/record.model";

export class RecordMapper{

    public static mapRecord(obj: any): Record {

        let record: Record = new Record();

        if (obj){

            record.wins = obj.wins;
            record.losses = obj.losses;
            record.pct = obj.pct;
        }

        return record;
    }
}