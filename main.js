function getData(data) {
 var bestsellers = '';
 for (var i = 0; i <= data.results.lists.length-1; i++) {
  var category = '';
  category += 
  '<h3 class="category">' + data.results.lists[i].display_name + '</h3>';
  
  var bookInfo = '';
  for (var j = 0; j <= data.results.lists[i].books.length-1; j++) {
    bookInfo += 
    '<div class="card">' +
      '<div class="text-center">' +
        '<img class="book-img" height="247" width="160" src=' + data.results.lists[i].books[j].book_image + '>' + 
      '</div>' +
      '<div class="card-block">' +
        '<p class="weeks text-center">' +  data.results.lists[i].books[j].weeks_on_list + ' weeks on the list' + '</p>' +
        '<h4 class="title card-title">' +  data.results.lists[i].books[j].title + '</h4>' +
        '<h5 class="author card-text">' + data.results.lists[i].books[j].author + '</h5>' +
        '<p class="description card-text">' + data.results.lists[i].books[j].description + '</p>' +
      '</div>' +
      '<div class="card-footer">' +
      '</div>' +
    '</div>'
    ;
  }

  bestsellers += 
  '<div class="book-row">' + 
    category + 
    '<div class="card-deck">' + bookInfo + '</div>' +
  '</div>';
}

var update = document.getElementById('books');
update.innerHTML = bestsellers;
}
