$(document).ready(function() {

    $('#btn').on('click', function() {
        window.open('https://en.wikipedia.org/wiki/Special:Random');
    });

    $('#search').on('input', function() {
        $.get('http://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=15&search=' + $('#searchTerm').val(), function(data) {
            $('.list').empty();
            for (var x = 0; x < data[1].length; x++) {
                $('.list').append('<a target="_blank" href="' + data[3][x] + '" ><li><h3>' + data[1][x] + '</h3><br></br><p>' + data[2][x] + '</p></li></a>');
            }
        }, 'jsonp');
    });

});
