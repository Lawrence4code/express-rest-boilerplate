const app = require('./config/express');
require('dotenv').config();

console.log('Running...');

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
