const jwt = require('jsonwebtoken');

module.exports = (schema) => {
    schema.methods.genToken = function() {
        let token = jwt.sign({ _id: this._id, role: this.role }, 'jwtPrivateKey', { expiresIn: "1d"});
        return token;
    }
}