exports.new = async function(req, res, next) {
    try {
        const flightId = req.params.id;
        res.render('tickets/new', { flightId });
    } catch (error) {
        next(error);
    }
};
