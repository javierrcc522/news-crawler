import { News } from './../js/news-crawler.js';


$(document).ready(function() {
  $('#bbcNews').click(function() {
    let news = new News();
    news.newsSourceApi().then(greeting);

    function greeting(response){
      let body = JSON.parse(response);
      let arr = [];
      body.articles.forEach(function(article) {
        arr.push(article);
      });
      arr.forEach(function(article) {
          $('#topBBC').append(`<li><a href='${article.url}'</a>${article.title}</li>`);
      }, function(error) {
          $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    }
  });

  $('#news-category-form').submit(function(event) {
    event.preventDefault();
    let category = $('#category').val();
    console.log(category);
    //dont run below code until the (promise) is resolved
    let promise3 = new Promise(function(resolve, reject) {
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

    promise3.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      let arr = [];
      body.sources.forEach(function(walnut) {
        // if(`${source.category}` === category) {
          arr.push(walnut);
        // }
      });
      arr.forEach(function(walnut) {
          $('#newsCategory').append(`<li><a href='${walnut.url}'</a>${walnut.name}</li>`);
      }, function(error) {
          $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    });
  });
});
