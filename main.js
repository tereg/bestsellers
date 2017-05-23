function getData(data) {
 var bestsellers = '';
 for (var i = 0; i <= data.results.lists.length-1; i++) {
  var category = '';
  category += 
  '<h3 class="category">' + data.results.lists[i].display_name + '</h3>';
  
  var bookInfo = '';
    for (var j = 0; j <= data.results.lists[i].books.length-1; j++) {
      bookInfo += 
      '<img src=' + data.results.lists[i].books[j].book_image + '>' + 
      '<p class="weeks">' +  data.results.lists[i].books[j].weeks_on_list + ' weeks on the list' + '</p>' +
      '<h4 class="title">' +  data.results.lists[i].books[j].title + '</h4>' +
      '<h5 class="author">' + data.results.lists[i].books[j].author + '</h5>' +
      '<p class="description">' + data.results.lists[i].books[j].description + '</p>';
    }

    bestsellers += category + bookInfo;
  }

  var update = document.getElementById('books');
  update.innerHTML = bestsellers;
}
