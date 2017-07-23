import 'babel-polyfill'
import Router from 'koa-router'
import { baseApi} from '../config'
import CitiesControllers from '../controller/cities'


const router = new Router();

router.prefix(`/${baseApi}`)

router.get('/',() => {}, CitiesControllers.find);


export default router
