// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
    res.status(200).json({
        metodo: req.method
    })
}