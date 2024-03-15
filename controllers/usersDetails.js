const userModel=require("../model/userSchema");
const userDetails= async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
module.exports=userDetails;
