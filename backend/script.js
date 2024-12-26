import Express from "express";
import userRoutes from './createuser/createuser.js';
import checkUser from './validateuser/logincheck.js';
import search from './Search/search.js';
import logout from './validateuser/logoutcheck.js';

const port = 8000;
const app = Express();
app.use(Express.json());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/api', userRoutes); 
app.use('/api', checkUser);
app.use('/api', search);
app.use('/api', logout);

app.use((req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
