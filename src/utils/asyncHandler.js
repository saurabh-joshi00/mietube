// Methods of creating a reusable "Async Handler" wrapper (utility function) to simplify asynchronous DB calls and standardized error management


// Method 1 - By using Promises
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error));
    }
}

export { asyncHandler };






// Method 2 - By using "try-catch" block

// const asyncHandler = (functionName) => async (req, res, next) => {
//     try {
//         await functionName(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         });
//     }
// }


/* Breaking the "Higher Order Function" into steps:
    // Normal function
    -> const asyncHandler = () => {}
    
    // Function accepting a function as a parameter
    -> const asyncHandler = (functionName) => {}
    
    // The outer function "asyncHandler" returns a brand-new, nested function. The parameterized function "functionName" just sits inside, waiting to be used later
    -> const asyncHandler = (functionName) => {() => {}}
*/