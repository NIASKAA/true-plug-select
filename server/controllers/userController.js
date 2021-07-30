const profileData= require('../models/profileSchema')
const {signToken} = require('../utils/auth');

module.exports = {
    async getOneUser({user=null, params}, res) {
        const foundUser = await profileData.findOne({})
    },

    async createUser({body}, res) {
        const user = await profileData.create(body)

        if(!user) {
            return res.status(400).json({message: 'Some shit happened'})
        }
        const token = signToken(user);
        res.json({token, user});
    },

    async login({body}, res) {
        const user = await profileData.findOne({})
    }
}