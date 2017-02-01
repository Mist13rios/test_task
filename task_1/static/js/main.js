$(document).ready(function () {
    $('#example_list').on('click', 'li', function(){
        var example_name= this.id;
        result_is(example_name);
        window.example_name = example_name;
    });
});

function result_is(example_name){
    $.ajax({
        url : 'discription',
        type : 'GET',
        data : { 'name' : example_name},
        success : function(json){
            $('#result p').remove();
            $('#result').append('<p>' + json +'</p>');
            
            $('#example_list p').remove();
            $('#example_list').append('<p>' +  'Selected: <br>' + example_name + '</p>')
        }
    });
};