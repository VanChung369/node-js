const { connect } = require('getstream');
const bcrypt = require('bcrypt');
const StreamChat = require('stream-chat').StreamChat;
const crypto = require('crypto');
require('dotenv').config();
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;
const app_id = process.env.APP_ID;
const signup = async(req,res) => {
    try {
        const { fullName, name, password,phoneNumber } = req.body;
        // ma hoa use id nguoi dung sang ma byte
        const userId = crypto.randomBytes(16).toString('hex');
        // connect chat
        const server=connect(api_key,api_secret,app_id);
        
        // ma hoa passw
        const hashedPassword = await bcrypt.hash(password, 10);
        // tao token 
        const token = server.createUserToken(userId);

        res.status(200).json({ token, fullName, name, userId, hashedPassword, phoneNumber });

    } catch (error) {
        res.status(500).json({ message: error });
    }
};
const login =  async(req,res) => {
try {
    const { name, password } = req.body;

    const server=connect(api_key,api_secret,app_id);
    
    const client= StreamChat.getInstance(api_key,api_secret);
    // lay user 
    const { users } = await client.queryUsers({ name: name });
    if(!users.length) return res.status(400).json({ message: 'User not found ' });
    //ma hoa va kiem tra passw 
    const success = await bcrypt.compare(password, users[0].hashedPassword);
      
    const token = server.createUserToken(users[0].id);

     // if true tra ve data
    if(success) {
        res.status(200).json({ token, fullName: users[0].fullName, name, userId: users[0].id});
    } else {
        res.status(500).json({ message: 'error password' });
    }

} catch (error) {
    res.status(500).json({ message: error });
}
};
module.exports={signup,login};