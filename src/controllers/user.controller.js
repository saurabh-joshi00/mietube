import { asyncHandler } from "../utils/asyncHandler.js";


// Controller's Setup

// User registration controller
const registerUser = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: 'ok'
    })
} );

export { registerUser };