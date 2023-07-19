const ClientError = require('./ClientError');

class AuthorizathionError extends ClientError {
    constructor(message) {
        super(message, 403);
        this.name = 'AuthorizationError';
    }
}

module.exports = AuthorizathionError;
