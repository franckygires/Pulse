import dbConnect from "../../../utils/dbConnect";
import library from "../../../models/library";

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const librarys = await library.find({});
        res.status(200).json({ success: true, data: librarys });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
       // console.log("hjb");
        let donnee = req.body;
        //console.log(donnee);
        const librarys = await library.create(donnee);
         //console.log(librarys);
        res.status(201).json({ success: true, data: librarys });
      } catch (error) {
        res.status(200).json({ success: false, data: ["err", error] });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
