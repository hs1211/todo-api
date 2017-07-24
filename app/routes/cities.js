import 'babel-polyfill'
import Router from 'koa-router'
import { baseApi} from '../config'
import CitiesControllers from '../controller/cities'
import jwt from '../middlewares/jwt'

const api = 'cities'

const router = new Router();

router.prefix(`/${baseApi}/${api}`);

router.get('/',CitiesControllers.find);


export default router
