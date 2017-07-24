import routesLoader from '../utils/routesLoader'

export default function(app) {

  routesLoader(`${__dirname}`)
  .then((files)=>{
      files.forEach((route)=> {

       // console.log(`route: ${route.routes()}`)
        app
          .use(route.routes())
          .use(route.allowedMethods({
            throw: true,
          }));
      });
  });

}
