import { Schema, models, model } from "mongoose";

const ProfileSchema = new Schema({
  // _id: {
  //   type: Schema.Types.ObjectId,
  //   required: false,
  // },
  name: {
    type: String,
    required: true,
  },
  company_name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
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
ProfileSchema.set("timestamps", true);

export default models.Profile || model("Profile", ProfileSchema);
