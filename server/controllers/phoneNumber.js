const { numbers } = require("../model/phoneNumber.model");


module.exports.guardarPhoneNumber = async (request, response) => {
    console.log(request.body)
    try {
        const res = await numbers.create(request.body);
        response.json(res);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getAllnumbers = async (request, response) => {
    try {
        const res = await numbers.find({})
        response.json(res);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getnumbers = async (request, response) => {
    try {
        const res = await numbers.findOne({ _id: request.params.id })
        response.json(res);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.updatenumbers = async (request, response) => {
    try {
        const res = await numbers.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        response.json(res);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.deletenumbers = async (request, response) => {
    try {
        const res = await numbers.deleteOne({ _id: request.params.id })
        response.json(res);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}