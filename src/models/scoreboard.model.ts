import { GameScore } from "./game-score.model";

export class Scoreboard{

    public scores: Array<GameScore>;
    
    constructor(){
        this.scores = [];
    }
}