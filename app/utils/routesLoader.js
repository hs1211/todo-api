import glob from 'glob'

export default function (dirname) {

  return new Promise(function(resolve, reject) {

    const routes = []
    /**
     * glob function helps find a pattern matched files.
     * (regex, option, cb- callback)
     */
    glob(`${dirname}/*`,{
      ignore: '**/index.js',
    }, (err, files) => {

      if (err) {
        return reject(err);
      };

      files.forEach((file) => {
        const path = require(file);
        routes.push(path);
        //console.log(`url ${JSON.stringify(path)}`);
      });
  
      return resolve(routes);
    });
  });

}
