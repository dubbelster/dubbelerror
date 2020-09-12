# dubbelerror

I won't call it 'lazy' it's efficient!

# Installation

```
npm i dubbelerror
```

# Usage

```javascript
import errorResponse from "dubbelerror";

const errRes = errorResponse(404, 'Not found');
console.log(errRes);

// Output: { status: 404, message: 'Not found' }
```