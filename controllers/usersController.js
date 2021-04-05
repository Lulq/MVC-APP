const usuarios = require('../models/usuarios');

const usersController = {
    index: (req, res) => {
        return res.send(usuarios.listarUsuarios());

    }
}

module.exports = usersController;