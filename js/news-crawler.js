export class News {
  newsSourceApi(){
    return  new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=485e73d110004d07b9d8cd9a0dac9893`;

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
