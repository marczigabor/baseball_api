import { GameScoreMapper } from "./game-score.mapper";
import { Scoreboard } from "../models/scoreboard.model";


export class ScoreboardMapper{

    public static mapScoreboard(obj: any):Scoreboard {

        let scoreboard: Scoreboard = new Scoreboard();

        if (obj && obj.scoreboard && obj.scoreboard.go_game && Array.isArray(obj.scoreboard.go_game)) {
            scoreboard.scores = obj.scoreboard.go_game.map((game: any)=> GameScoreMapper.mapGameScore(game) );
        }

        return scoreboard;
    }
}