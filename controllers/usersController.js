const usersController = {
    index: (req, res) => {
        return res.send('estou exibindo essa mensagem através do controller!');

    }
}

module.exports = usersController;