const manufacturerService = require("../../../../lib/manufacturer");

// Get all reports
const findAll = async (_req, res, next) => {
    try {
        const manufacturers = await manufacturerService.findAll();
        res.status(200).json({ manufacturers })
    } catch (err) {
        next(err)
    }
}

module.exports = findAll;