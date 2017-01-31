$(document).ready(function () {
    console.log('main page loaded')
    $('#example_list').on('click', 'li', function(){
        var example_name= this.id;
        result_is(example_name);
        window.example_name = example_name;
    });
});

function result_is(example_name){
    console.log(' Click detected, select ' + example_name)
    $.ajax({
        url : 'discription',
        type : 'GET',
        data : { 'name' : example_name},
        success : function(json){
            $('#result div').remove();
            $('#result').append(json);
            
            $('#example_list p').remove();
            $('#example_list').append('<p>' +  'Selected: <br>' + example_name + '</p>')
        }
    });
};