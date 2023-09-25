const authorize = (req, res, next) => {
  /* an example of how an API request key can be used, NOT PROPER FOR REAL USE
  this is just a small example for now*/
  const { apiKey } = req.query;
  if (apiKey === 'ping') {
    console.log('Authorize Access Graneted');
    // This modifies the request object for the next response
    req.user = { Name: 'Jimmy Johns', id: 123456 };
    next();
  } else {
    console.log('Authorize Access Denied');
    res.send({ results: [], status: 401, message: 'Access Denied' });
    // next();
  }
};
module.exports = authorize;
