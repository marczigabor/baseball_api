import { TeamScore } from "./team-score.model";
import { Pitcher } from "./pitcher.model";

export class GameScore{

    public id: string;
    public startTime: string;
    public homeScore?: TeamScore;
    public awayScore?: TeamScore;
    public winningPitcher?: Pitcher;
    public losingPitcher?: Pitcher;
    public savePitcher?: Pitcher;

    constructor(){
        this.id = "";
        this.startTime = "";
        this.awayScore = new TeamScore();
        this.homeScore = new TeamScore();
        this.winningPitcher = new Pitcher();
        this.losingPitcher = new Pitcher();
        this.savePitcher = new Pitcher();
    }

}