import { Schema, model } from "mongoose";

const phoneUser = new Schema({
    idUser:{type:String},
    name: {
        type: String,
    },
    phoneNumber:{
        type:Number
    }
}, {
    timestamps: true
  });

export const userPhone = model('phoneNumber', phoneUser)