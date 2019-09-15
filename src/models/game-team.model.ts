import { Record } from "./record.model";

export class GameTeam{

    public id: number;
    public name: string;
    public runs?: number;
    public record: Record;
    
    constructor(){
        this.id = 0;
        this.name = "";
        this.runs = undefined;
        this.record = new Record();
    }
}