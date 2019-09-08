import { TeamScoreMapper } from "./team-score.mapper";
import { PitcherMapper } from "./pitcher.mapper";
import { Pitcher } from "../models/pitcher.model";
import { GameScore } from "../models/game-score.model";
import { TeamScore } from "../models/team-score.model";

export class GameScoreMapper{


    public static mapGameScore(obj: any):GameScore {

        let gameScore: GameScore = new GameScore();

        if (obj.game && Array.isArray(obj.game) && obj.game[0].$){

            gameScore.id = obj.game[0].$.id;
            gameScore.startTime = obj.game[0].$.start_time;
        }

        gameScore.homeScore = GameScoreMapper.mapTeamScore(obj, 0);
        gameScore.awayScore = GameScoreMapper.mapTeamScore(obj, 1);

        gameScore.winningPitcher = GameScoreMapper.mapPitcher(obj.w_pitcher);
        gameScore.losingPitcher = GameScoreMapper.mapPitcher(obj.l_pitcher);
        gameScore.savePitcher = GameScoreMapper.mapPitcher(obj.sv_pitcher);

        return gameScore;
    }

    private static mapPitcher(obj: any): Pitcher | undefined{
        if (obj){
            return PitcherMapper.mapPitcher(obj);
        }else {
            return undefined;
        }
    }

    private static mapTeamScore(obj: any, index: number): TeamScore | undefined{
        
        if (obj.team && Array.isArray(obj.team) && obj.team[index].$){
            return TeamScoreMapper.mapTeamScore(obj.team[index]);
        }else{
            return undefined;
        }
    }

}