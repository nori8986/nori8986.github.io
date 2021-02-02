var day = document.getElementById("daytime");
var car = document.querySelector(".car");
var sky = document.querySelector(".sky")

addEventListener("keypress", function(x)
    {
        if (x.key == "Enter") {
             
            day.classList.toggle('moving');
            car.classList.toggle("suspention");
            sky.classList.toggle("remake");
        }
        
    });

