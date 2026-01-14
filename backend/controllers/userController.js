import User from "../models/userModel.js";

//Get Status
export const getStats = async(req, res)=> {
    try {
        
        const total = await User.countDocuments();
        const active = await User.countDocuments({status: "Active"});
        const inactive = await User.countDocuments({ status: "Inactive"});

        res.json({ total, active, inactive});

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching status", error: error.message})
    }
};

//Search users
export const searchUsers = async(req, res) => {
    try {
        
        const query = req.params.query;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const searchQuery = {
            $or: [
                {name: { $regex: query, $options: "i" }},
                {email: { $regex: query, $options: "i" }},
                {phone: { $regex: query, $options: "i" }},
                {status: { $regex: query, $options: "i" }},
            ]
        };

        const users = await User.find(searchQuery)
                            .sort({createdAt: -1})
                            .skip(skip)
                            .limit(limit);

        const total = await User.countDocuments(searchQuery);

        res.json({
            users,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            totalUsers: total
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching status", error: error.message})
    }
};

//Get all users
export const getAllUsers = async(req, res)=> {
    try {
        
        const query = req.params.query;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const users = await User.find()
                            .sort({createdAt: -1})
                            .skip(skip)
                            .limit(limit);
        
        const total = await User.countDocuments();

        res.json({
            users,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            totalUsers: total
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching status", error: error.message})
    }
}

//Get single user
export const getUserById = async(req, res)=> {
    try {
        
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({ message: "User not found"})

        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching status", error: error.message})
    }
};


//Create User
export const createUser = async(req, res)=> {
    try {
        
        const { name, email, phone, status } = req.body;

        if(!name || !email || !phone) 
            return res.status(400).json({ message: "Name, email and phone are required"});

        const existingUser = await User.findOne({ email });

        if(existingUser) 
            return res.status(400).json({ message: "Email already exists"});

        const user = new User({
            name,
            email,
            phone,
            status: status || "Active"
        });

        await user.save();
        res.status(201).json(user);


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching status", error: error.message})
    }
}