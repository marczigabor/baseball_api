import { router } from "./index";

import user from "../controllers/baseball";

router.get('/scoreboard', user.scoreboard_get);

router.get('/boxscore', user.boxscore_get);

export default router;
