const url = require("url"); //import the url module inbult

const browserUrl =
  "http://www.apnaadda.com/4000/location/place/city/2024/adda.html?name=rajan&age=27";

const myUrl = url.parse(browserUrl, true); //true is reading for query perameter
console.log("protocol :" + myUrl.protocol); //get http protocol
console.log("port :" + myUrl.port); //get port number 4000
console.log("Host Details :" + myUrl.host); //host the with port number
console.log("host name :" + myUrl.hostname); //host name withot port number
console.log("path :" + myUrl.path); //without host name  with parameterget the path details our path
console.log("pathname :" + myUrl.pathname); //in the path name without parameter
const query = myUrl.query; //get the parameter
console.log(query.name + " " + query.age); //get the parameter details
