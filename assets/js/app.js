$(function(){
    populateButtons(topics,'searchButton','#buttonsArea');
})

var topics = ["Dog", "Cat", "Bird"];

function populateButtons(topics,classToAdd,areaToAddTo){
    $(areaToAddTo).empty();
    for(var i = 0; i < topics.length; i++){
        var a = $('<button>');
        a.addClass(classToAdd);
        a.attr('data-type',topics[i]);
        a.text(topics[i]);
        $(areaToAddTo).prepend(a);
    }
}

$(document).on('click','.searchButton',function(){
    $('#searches').empty();
    var type = $(this).data('type');
    var queryUrl = 'https://api.giphy.com/v1/gifs/search?q='+type+'&api_key=LCBBepXycXgqeV7p4QbDSb0vP7bVbUIX&=10';
    $.ajax({url:queryUrl, method:'GET'})
        .done(function(response){
            for (var i = 0; i < response.data.length; i++){
                var searchDiv = $('<div class="search-item">');
                var rating = response.data[i].rating;
                var p = $('<p>').text('Rating: '+rating);
                var animated = response.data[i].images.fixed_height.url;
                var still = response.data[i].images.fixed_height_still.url;
                var image = $('<img>');
                image.attr('src', still);
                image.attr('data-still', still);
                image.attr('data-animated', animated);
                image.attr('data-state','still');
                image.addClass('searchImage');
                searchDiv.prepend(p);
                searchDiv.prepend(image);
                $('#searches').prepend(searchDiv);
                
            }
        })
})

$(document).on('click','.searchImage',function(){
    var state = $(this).attr('data-state');
    if(state === 'still'){
        $(this).attr('src',$(this).data('animated'));
        $(this).attr('data-state','animated');
    } else {
        $(this).attr('src',$(this).data('still'));
        $(this).attr('data-state','still');
        console.log(this);
    }


})

$('#addSearch').on('click', function(){
    var newSearch = $('input').eq(0).val();
    topics.push(newSearch);
    populateButtons(topics,'searchButton','#buttonsArea');
    return false;

})





