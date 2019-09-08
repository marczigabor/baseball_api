import { router } from "./index";

import user from "../controllers/baseball.controller";

router.get('/schedule', user.schedule_get);

router.get('/linescore', user.lineScore_get);

export default router;
