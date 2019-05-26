module.exports = async function (req, res, proceed) {
    if (req.session.admin) {
      return proceed();
    }
    return res.forbidden();
};