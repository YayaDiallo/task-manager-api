const app = require('./app');

const port = process.env.PORT;

/** App listen */
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
