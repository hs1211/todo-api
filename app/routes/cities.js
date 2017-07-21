import 'babel-polyfill'
import Router from 'koa-router'
import { baseApi} from '../config/config'
import CitiesControllers from '../controller/cities'


const router = new Router();


router.get('/api/',() => {}, CitiesControllers.find);


export default router
