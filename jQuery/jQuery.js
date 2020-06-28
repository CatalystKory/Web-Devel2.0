$("#clickBait").click(function(){

    alert("Hello!");

});

$("#resizable").resizable(
    {grid: 50},
    {alsoResize: "#also"},
    {resize: function(event, ui){
       
        if ($("#resizable").width() == 300) {
            alert("Approaching Maximum Size");
        } else if ( $("#resizable").width() > 600){
            $("#resizable").hide();
        }
    }}
    );

$("#also").resizable({grid:50});

$("#draggable").draggable( {containment: "#parent"});