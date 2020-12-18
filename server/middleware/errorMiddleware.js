const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
  }
  
  const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    console.log('@@@', statusCode);
    res.status(statusCode)
    console.log(err.message);
    res.json({
      message: err.message,
    })
    next()
  }

  module.exports = {
      notFound,
      errorHandler,
  }