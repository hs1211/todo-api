import 'babel-polyfill'


class CitiesControllers {

  async find(ctx){
      ctx.body = await function(){

      return {
        "mission":"Say Hello World"
      };
    }
  }
}

export default new CitiesControllers();
