const manufacturerService = require("../../../../lib/manufacturer");

const findSingle = async (req, res, next) => {
    const id = req.params.id;
    try {
        const manufacturer = await manufacturerService.findSingle({ id });
        res.status(200).json(manufacturer);
    } catch (err) {
        next(err);
    }
}

module.exports = findSingle;