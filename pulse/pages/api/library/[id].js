import dbConnect from "../../../utils/dbConnect";
import library from "../../../models/library";

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

    const {
        query: {id}, method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const librarys = await library.findById(id);

                if (!librarys) {
                    return res.status(400).json({success: false});
                }

                res.status(200).json({success: true, data: librarys});
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        case 'PUT':
            try {
                const librarys = await library.findByIdAndUpdate(id, req.body, {
                    new: true, runValidators: true
                });

                if (!librarys) {
                    return res.status(400).json({success: false});
                }

                res.status(200).json({success: true, data: librarys});
            } catch (error) {
                console.log(error)
                res.status(400).json({success: false});
            }
            break;
        case 'DELETE':
            try {
                const deletedlibrary = await library.deleteOne({_id: id});

                if (!deletedlibrary) {
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
