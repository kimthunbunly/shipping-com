const bcrypt = require('bcrypt');

module.exports = (schema) => {
    schema.pre('save', async function(next) {
        let schema = this;
        if(schema.isModified('password')) {
            let hash = await bcrypt.hash(schema.password, 10);
            schema.password = hash;

            next();
        }
    });
}