import { Schema, models, model } from "mongoose";

const librarySchema = new Schema({
  // _id: {
  //   type: Schema.Types.ObjectId,
  //   required: false,
  // },
  name: {
    type: String,
    required: false,
  },
  company_name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: false,
  },
  username : {
    type: String,
    required: true
  }
  
});
librarySchema.set("timestamps", true);

export default models.library || model("library", librarySchema);
