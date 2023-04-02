const { userPhone } = require("../model/phoneNumber.model");


module.exports.guardarPhoneNumber = async (request, response) => {
    try {
        const res = await userPhone.create(request.body);
        response.json(res);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getAlluserPhone = async (request, response) => {
    try {
        const res = await userPhone.find({}).sort({ nombre: 1 })
        response.json(res);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getuserPhone = async (request, response) => {
    try {
        const res = await userPhone.findOne({ _id: request.params.id })
        response.json(res);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.updateuserPhone = async (request, response) => {
    try {
        const res = await userPhone.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        response.json(res);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.deleteuserPhone = async (request, response) => {
    try {
        const res = await userPhone.deleteOne({ _id: request.params.id })
        response.json(res);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}