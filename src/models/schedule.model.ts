import { Game } from "./game.model";

export class Schedule{

    public scores: Array<Game>;
    
    constructor(){
        this.scores = [];
    }
}