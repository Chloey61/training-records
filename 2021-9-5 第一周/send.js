const { resolve } = require("path/posix");

class ResponseParser {
  constructor() {}
  receive(str) {
    for (let i = 0; i < str.length; i++) {
      this.receiveChar(str.charAt(i));
    }
  }
  receiveChar(char) {}
}

const send = (CONNECTION) => {
  return new Promise((resole, reject) => {
    const parser = new ResponseParser();
    if (CONNECTION) {
        CONNECTION.write(toString());
    } else {
        CONNECTION = net.createConnection({
            host: this.host,
            port: this.port,
        },()=>{
            CONNECTION.write(this.toString());
        })
    }
    CONNECTION.on('data',(data)=>{
        console.log(data.toString());
        parser.receive(data.toString());
        if(parser.isFinished) {
            resolve(parser,response);
            CONNECTION.end();
        }
    })
    CONNECTION.on('error',(err)=>{
        reject(err);
        CONNECTION.end();
    })
  });
};

const toString = () => {
    return `${this.method + this.path } HTTP/1.1\r${Object.keys(this.headers.map(key=> `${key}:${this.headers[key]}`).join('\r\n'))}\r\r${this.bodyText}}`
}