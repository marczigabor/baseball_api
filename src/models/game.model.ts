import { GameTeam } from "./game-team.model";

export class Game{

    public id?: number;
    public homeScore?: GameTeam;
    public awayScore?: GameTeam;
    public venue: string;

    constructor(){
        this.id = undefined;
        this.awayScore = new GameTeam();
        this.homeScore = new GameTeam();
        this.venue = "";
    }

}