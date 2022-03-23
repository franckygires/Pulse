import dbConnect from "../../../utils/dbConnect";
import Profile from "../../../models/Profile";

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

    const {
        query: {id}, method
    } = req;

    switch (method) {
        case 'GET':
            try {
                console.log(id)
                const Profiles = await Profile.findById(id);

                if (!Profiles) {
                    return res.status(404).json({success: false});
                }

                res.status(200).json({success: true, data: Profiles});
            } catch (error) {
                res.status(404).json({success: false});
            }
            break;
        case 'PUT':
            try {
                const Profiles = await Profile.findByIdAndUpdate(id, req.body, {
                    new: true, runValidators: true
                });

                if (!Profiles) {
                    return res.status(400).json({success: false});
                }

                res.status(200).json({success: true, data: Profiles});
            } catch (error) {
                console.log(error)
                res.status(400).json({success: false});
            }
            break;
        case 'DELETE':
            try {
                const deletedProfile = await Profile.deleteOne({_id: id});

                if (!deletedProfile) {
                    return res.status(400).json({success: false})
                }

                res.status(200).json({success: true, data: {}});
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
        default:
            res.status(400).json({success: false})
            break;
    }
}
