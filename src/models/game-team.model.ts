import { Record } from "./record.model";

export class GameTeam{

    public name: string;
    public runs?: number;
    public record: Record;
    
    constructor(){
        this.name = "";
        this.runs = undefined;
        this.record = new Record();
    }
}