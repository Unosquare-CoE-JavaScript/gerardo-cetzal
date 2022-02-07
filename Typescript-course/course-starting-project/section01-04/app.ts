let userInput: unknown;
let userName: string;

// unknown is better than any because it makes sure that you're not allowed to do everything.

userInput = 5;
userInput = 'Ger';
if (typeof userInput == 'string') {
    userName = userInput;
}

function generateError(message: string, code: number) {
    throw { message: message, errorCode: code};
}

generateError('An error ocurred', 500);