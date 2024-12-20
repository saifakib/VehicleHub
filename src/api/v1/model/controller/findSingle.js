const modelService = require("../../../../lib/model");

const findSingle = async (req, res, next) => {
    const id = req.params.id;
    try {
        const model = await modelService.findSingle({ id });
        res.status(200).json(model);
    } catch (err) {
        next(err);
    }
}

module.exports = findSingle;