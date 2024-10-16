const express = require('express');
const path = require('path');
const app = express();
const port = 4000; 
app.use('/public', express.static(path.join(__dirname, 'assets')));
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});