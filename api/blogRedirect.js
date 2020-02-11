export default function(req, res, next) {
  // Check to see if we need to redirect to the blog url.
  if (req.headers.host === 'blog.shahzeb.co') {
    const to = `https://shahzeb.svbtle.com${req.originalUrl}`;

    console.log(`Doing a blog redirect to ${to}`);

    res.writeHead(301, { Location: to });
    res.end();
  }

  next();
}
