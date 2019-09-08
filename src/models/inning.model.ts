import { Score } from "./score.model";

export class Inning{

    public no: number;
    public home: Score;
    public away: Score;

    constructor(){
        this.no = 0;
        this.away = new Score();
        this.home = new Score();
    }

}