import 'babel-polyfill'


class CitiesControllers {

  async find(ctx){
    
      ctx.body = JSON.stringify({ 
        'mission': 'Say Hello World'
      });
  }
}

export default new CitiesControllers();
