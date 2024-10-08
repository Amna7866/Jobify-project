import { Router } from 'express';
import { register, login } from '../controllers/authcontroller.js';
const router = Router();
import { validateRegisterInput, validateLoginInput } from '../middleware/validationMiddleware.js';
import { logout } from '../controllers/authcontroller.js'; 

router.post('/register',validateRegisterInput, register); 
router.post('/login',validateLoginInput, login); 
router.get('/logout', logout);

export default router;