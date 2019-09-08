import { GameTeamMapper } from "./game-team.mapper";
import { Game } from "../models/game.model";

export class GameMapper{


    public static mapGameScore(obj: any):Game {

        let game: Game = new Game();

        if (obj){

            game.id = obj.gamePk;

            if (obj.teams){
                game.homeScore =  GameTeamMapper.mapGameTeam(obj.teams.home);
                game.awayScore = GameTeamMapper.mapGameTeam(obj.teams.away);
            }

            if (obj.venue){
                game.venue = obj.venue.name;
            }
        }

        return game;
    }
}