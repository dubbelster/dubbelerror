import errorResponse from "./index";

const errRes = errorResponse(404, 'Not found');
console.log(errRes);

// Output: { status: 404, message: 'Not found' }