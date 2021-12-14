$.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=bIj9yuFrnsA53DVxBLU34Ou0q4dfjADl7gWAKmiA`,
    type: "GET",

    success: function (response){
       $("#titulo_img").text(response.title);
       $("#foto").attr("src", response.hdurl);
       $("#autor").text(response.copyright);
       $("#explica_foto").text(response.explanation);
    }
})




$("#btn").click(
    
    function buscaApiApod(){
        const data = $("#data").val(); 

        $.ajax({
            url:`https://api.nasa.gov/planetary/apod?api_key=jSn8zNxYT2cecvZRa9ClekgdUBsSrZvtyN9F74G9&date=${data}`,
            type: "GET", 

            success: function (response){
             $("#titulo_img").text(response.title);
             $("#foto").attr("src", response.hdurl);
             $("#autor").text(response.copyright);
             $("#explica_foto").text(response.explanation);
             
             
             
            }
        }

        )

    }

)
