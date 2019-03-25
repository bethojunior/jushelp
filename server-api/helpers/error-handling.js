module.exports = function errorHandling(err, req, res, next) {
    console.log(err);
    console.log(typeof (err));

    if (typeof(err)=='string') {
      return res.status(400).json({
          msg: err
      });
    }

    if (err.name == 'ValidationError') {
        return res.status(400).json({
            msg: err.message
        });
    }

    if (err.name == 'UnauthorizedError' || err.name == 'TokenExpiredError') {
        return res.status(401).json({
            msg: 'Sessão expirada!'
        });
    }

    if (err.message.match(/duplicate/gi) != null) {
        return res.status(409).json({
            msg: 'Cadastro já existente!'
        });
    }

    return res.status(500).json({
        msg: err.message
    });
};