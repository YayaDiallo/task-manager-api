const express = require('express');
require('./db/mongoose');
require('dotenv').config({ path: `${process.cwd()}/config/.env` });
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

// Pour bloquer notre app
// app.use((req, res, next) => {
//   res.status(503).send('Site is currently downn. Check back soon!.');
// });

app.use(express.json());
/** Routes */
app.use(userRouter);
app.use(taskRouter);

/** App listen */
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
