import { News } from './../js/news-crawler.js';

$(document).ready(function() {
  $('#bbcNews').click(function() {
    //dont run below code until the (promise) is resolved
    let promise1 = new Promise(function(resolve, reject) {
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

    promise1.then(function(response) {
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
    });
  });

  $('#hackerNews').click(function() {
    //dont run below code until the (promise) is resolved
    let promise2 = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=485e73d110004d07b9d8cd9a0dac9893`;
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

    promise2.then(function(response) {
      let body = JSON.parse(response);
      let arr = [];
      body.articles.forEach(function(article) {
        arr.push(article);
      });
      arr.forEach(function(article) {
          $('#topHacker').append(`<li><a href='${article.url}'</a>${article.title}</li>`);
      }, function(error) {
          $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    });
  });

  $('#categoryButton').click(function() {
    let category = $('#category').val();
    //dont run below code until the (promise) is resolved
    let promise3 = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://newsapi.org/v1/sources?category`;
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
      let arr = [];
      body.sources.forEach(function(source) {
        if(`${source.category}` === category) {
          arr.push(source);
        }
      });
      arr.forEach(function(category) {
          $('#newsCategory').append(`<li><a href='${source.url}'</a>${source.description}</li>`);
      }, function(error) {
          $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    });
  });
});
