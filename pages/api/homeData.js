import sessions from 'client-sessions';

const config = require('../../bin/config');

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async (req, res) => {
  // Run sessions middleware
  await runMiddleware(req, res, sessions({
    cookieName: 'session',
    secret: config.client_secret,
    duration: 24 * 60 * 60 * 1000,
    activeDuration: 1000 * 60 * 5,
    cookie: {
      path: '/',
      ephemeral: false,
      httpOnly: true,
      secure: false,
      // sameSite: 'none'
    }
  }));

  let courseId = 1;
  let moduleProgress = {}
  let postTestStatus = {
    open: true,
    locked: false,
    toolTip: ''
  }
  let score = 0;
  let awardedScores = {}

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({
    title: "Home | " + config.herokuAppName,
    courseId: courseId,
    moduleProgress,
    postTestStatus,
    score,
    awardedScores
  }))
}