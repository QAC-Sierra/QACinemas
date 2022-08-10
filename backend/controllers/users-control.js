const User = require('../schemas/users');

createUser = (req,res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success:false,
            error: 'You must provide a user',
        })
    }

    const user = new User(body);

    if (!user){
        return res.status(400).json({success:false, error: err});
    }


    user.save().then(() => {
        return res.status(201).json({
            success:true,
            id: user._id,
            message: 'user created!',
        })
    })
    .catch(error => {
        return res.status(400).json({error, message: 'User not created!'
    })
})
}

getUserById = async (req, res) => {
    await User.findOne({user_id: req.params.id}, (err, user) => {
        if (err) {
            return res.status(400).json({success:false, error: err});
        }

        if (!user) {
            return res.status(404).json({success:false, error: 'User not found!'});
        }
        return res.status(200).json({success:true, data: user});
    }).catch(err => console.log(err));
}

getUsers = async (req, res) => {
    await User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({success:false, error: err});
        }
        if (!users.length) {
            return res.status(404).json({success:false, error: 'No users found!'});
        }
        return res.status(200).json({success:true, data: users});
    }).catch(err => console.log(err));
}

deleteUser = async (req, res) => {
    await User.findOneAndDelete({user_id: req.params.id}, (err, user) => {
        if (err) {
            return res.status(400).json({success:false, error: err});
        }
        if (!user) {
            return res.status(404).json({success:false, error: 'No user found!'});
        }
        return res.status(200).json({success:true, data: user});
    }).catch(err => console.log(err));
}

module.exports = {
    createUser,
    getUserById,
    getUsers,
    deleteUser,
}