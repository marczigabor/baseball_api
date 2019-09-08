import { TeamScore } from "../models/team-score.model";

export class TeamScoreMapper{


    public static mapTeamScore(obj: any):TeamScore {

        let teamScore: TeamScore = new TeamScore();

        if (obj && obj.$ && obj.gameteam && Array.isArray(obj.gameteam)){

            teamScore.name = obj.$.name;

            teamScore.r = obj.gameteam[0].$.R;
            teamScore.h = obj.gameteam[0].$.H;
            teamScore.e = obj.gameteam[0].$.E;
        }

        return teamScore;
    }
}