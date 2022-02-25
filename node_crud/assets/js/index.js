
$('#from').submit(function(even){
alert('successfully');
});
$("#update").submit(function(event){
    //ngan chan hanh vi gui du lieu
    event.preventDefault();
    var array = $(this).serializeArray();
    var data = {}
    $.map(array, function(n, i){
        data[n['name']] = n['value']
    })
    $.ajax({
        "url" : `http://localhost:8000/api/v1/user/${data.id}`,
        "method" : "PUT",
        "data" : data
    }).done(function(response){
        alert("Successfully!");
    });

})

if(window.location.pathname == "/"){
    //lay dom
    $ondelete = $(".table tbody tr td a.delete");
    $ondelete.click(function(){
        //lay id
        var id = $(this).attr("data-id")
        if(confirm("Bạn có thực sự muốn xóa bản ghi này không?")){
            $.ajax({
                "url" : `http://localhost:8000/api/v1/user/${id}`,
                "method" : "DELETE"
            }).done(function(response){
                alert("Deleted Successfully!");
                location.reload();
            })
        }

    })
}