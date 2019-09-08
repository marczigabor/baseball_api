
export class Score{

    public runs: number;
    public hits: number;
    public errors: number;
    public leftOnBase: number;

    constructor(){
        this.runs = 0;
        this.hits = 0;
        this.errors = 0;
        this.leftOnBase = 0;
    }
}