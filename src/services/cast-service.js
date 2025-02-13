import { query } from "express";
import Cast from "../models/Cast.js";

export default{
  create(castData){
    //TODO: create cast
    return Cast.create(castData);
    
  },
  getAll(filter = {}){
    let query = Cast.find({});

    if(filter.exclude){
      //query=query.find({_id: {$nin: filter.exclude}})
      query = query.nin('_id',filter.exclude);
    }

    return query;
  }
}