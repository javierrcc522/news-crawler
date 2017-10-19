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

//delete button
  $('#resetButton').click(function() {
    $('#news-list').text("");
  });

// second api
  $('#news-category-form').submit(function(event) {
    event.preventDefault();
    let news = new News();
    let pickleRick = $('#category').val();
    news.newsCategoryApi().then(greeting2);

    //dont run below code until the (promise) is resolved

    function greeting2(response){
      let body = JSON.parse(response);
      let arr = [];
      body.sources.forEach(function(walnut) {
        let walnutNut = walnut.category;
        if(walnutNut === pickleRick) {
          arr.push(walnut);
        }
      });
      arr.forEach(function(walnut) {
          $('#news-list').append(`<li><a href='${walnut.url}'</a>${walnut.name}</li>`);
      }, function(error) {
          $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    }
  });// making functiongretting
});
