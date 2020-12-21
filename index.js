//declaring http server
const http = require('http');

//declaring server ip
const hostname = '127.0.0.1';

//declaring port number
const port = 3000;

//function to check the num
const checkArray =(n)=>{
    let response=[];
    n.map((item) => {
        if (isNaN(item)) {
          response.push(`Invalid Item`);
        } else {
          const x = item % 3;
          const y = item % 5;
          if (x === 0 && y === 0) {
            response.push('fizzbuzz');
          } else if (x === 0) {
            response.push('fizz');
          } else if (y === 0) {
            response.push('Buzz');
          }
          if (x !== 0) {
            response.push(`Divided '${item}' by 3`);
          }
          if (y !== 0) {
            response.push(`Divided '${item}' by 5`);
          }
        }
      });
      console.log(response)
}
//to start the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
});

//to listen the port and execute the code
server.listen(port, hostname, () => {

    //logic for test number
    let arrayData = [1, 2, 3, 15, 'aa', 23]
    checkArray(arrayData)
});