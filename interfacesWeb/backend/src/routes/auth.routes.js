import { Router } from "express";//Importamos express para usar su enrutador
import {register, login} from "../controllers/auth.controllers.js"

const router = Router();

router.post('/register', register);
router.post('/login', login);

export default router;