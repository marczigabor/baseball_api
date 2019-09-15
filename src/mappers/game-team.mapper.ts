import { GameTeam } from "../models/game-team.model";
import { RecordMapper } from "./record.mapper";

export class GameTeamMapper{


    public static mapGameTeam(obj: any):GameTeam {

        let gameTeam: GameTeam = new GameTeam();

        if (obj){
            gameTeam.id = obj.team.id;
            gameTeam.name = obj.team.name;
            gameTeam.runs = obj.score;

            gameTeam.record = RecordMapper.mapRecord(obj.leagueRecord);
        }

        return gameTeam;
    }
}