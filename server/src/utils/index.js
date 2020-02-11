exports.formatData = function formData({ code = 0, data = [], msg = 'success' } = {}) {

    if (code === 1) {
        msg = 'fail';
    }

    return {
        code,
        data,
        msg
    }
}

const { create, verify } = require('./token');

exports.token = { create, verify }

// {
//     formatData,
//     token:{
//         create,
//         verify
//     }
// }

