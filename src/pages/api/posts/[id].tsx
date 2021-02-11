const handler = (req, res) => {
    const {
        query: {id},
    } = req

    res.status(200).json({post: {id}})
}

export default handler