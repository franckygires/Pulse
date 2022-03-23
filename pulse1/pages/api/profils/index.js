import dbConnect from "../../../utils/dbConnect";
import Profile from "../../../models/Profile";

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const Profiles = await Profile.find({});
        res.status(200).json({ success: true, data: Profiles });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
       // console.log("hjb");
        let donnee = req.body;
       // console.log(donnee);
        const Profils = await Profile.create(donnee);
        // console.log(Profils);
        res.status(201).json({ success: true, data: Profils });
      } catch (error) {
        res.status(200).json({ success: false, data: ["err", error] });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
