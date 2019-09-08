import { Inning } from "./inning.model";
import { Score } from "./score.model";

export class LineScore{

    public innings: Array<Inning>;
    public homeScore: Score;
    public awayScore: Score;

    constructor(){
        this.innings = [];
        this.homeScore = new Score();
        this.awayScore = new Score();
    }
}