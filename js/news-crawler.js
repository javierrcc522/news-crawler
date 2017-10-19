var apiKey = require('./../.env').apiKey;
export class News {
  newsSourceApi(newssrc){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://newsapi.org/v1/articles?source=${newssrc}&sortBy=top&apiKey=${apiKey}`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

  newsCategoryApi() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://newsapi.org/v1/sources`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

}
