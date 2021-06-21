const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});