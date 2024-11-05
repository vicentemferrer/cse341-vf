function corsMiddleware(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
}

export {
    corsMiddleware
}