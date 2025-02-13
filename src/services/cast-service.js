import Cast from "../models/Cast.js";

export default{
  create(castData){
    //TODO: create cast
    return Cast.create(castData);
    
  },
  getAll(){
    return Cast.find({});
  }
}