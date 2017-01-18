$(document).ready(function() {

    //getJSON gets the data file and holds it in result, starts a function to loop
    //the loop looks at the data in result to index through till the end of the data
    $.getJSON('topspots.json', function(result) {
        $(result).each(function(index, value) {

            //setting up the var with empty string, so not undefined, add to it later
            //the mapLink var has the url and button.  The value.location says I want the data from main array at the 
            //location property, this opens the mini array to position [0] and [1] to get lagitude and longitude.
            var trHTML = '';
            var mapLink = '<button class="btn btn-primary"> <a target="_blank" href="https://www.google.com/maps?q=' + value.location[0] + ',' + value.location[1] + '">' + 'Click to see location in Google Maps' + '</a>' + '</button>';


            //takes the value from the array in name and description properties, stores them in the table colums, all in trHTML container
            trHTML += '<tr><td>' + value.name + '</td><td>' + value.description + '</td><td>' + mapLink + '</td></tr>';

            //This takes all of the values created in var trHTML and appends them into the table tag
            $(table).append(trHTML);
        })


    })


});
