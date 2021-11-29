var village = document.getElementById("farm");
var area = village.getContext("2d");

var map = {
    url: "tile.png",
    isLoad: false
};

var cow = {
    url: "vaca.png",
    isLoad: false
};

var chicken = {
    url: "pollo.png",
    isLoad: false
};

var pig = {
    url: "cerdo.png",
    isLoad: false
};

map.image = new Image();
map.image.src = map.url;
map.image.addEventListener("load", load_map);

cow.image = new Image();
cow.image.src = cow.url;

pig.image = new Image();
pig.image.src = pig.url;

chicken.image = new Image();
chicken.image.src = chicken.url;

function load_map(){
    map.isLoad = true;
    draw_map();
}

function draw_map(){
    if (map.isLoad){
        area.drawImage(map.image, 0, 0);
    }
}

function refresh_farm(){
    load_map();
}

function draw_farm(){
    load_map()
    console.log("pressed");
    var cow_count = document.getElementById("cow_count").value;
    var pig_count = document.getElementById("pig_count").value;
    var chicken_count = document.getElementById("chicken_count").value;

    for(var i = 0; i < cow_count; i++){
        var x = random_num(0, 7);
        var y = random_num(0, 7);
        var x = x * 60;
        var y = y * 40;
        area.drawImage(cow.image, x, y);
    }

    for(var i = 0; i < pig_count; i++){
        var x = random_num(0, 7);
        var y = random_num(0, 7);
        var x = x * 60;
        var y = y * 40;
        area.drawImage(pig.image, x, y);
    }

    for(var i = 0; i < chicken_count; i++){
        var x = random_num(0, 7);
        var y = random_num(0, 7);
        var x = x * 60;
        var y = y * 40;
        area.drawImage(chicken.image, x, y);
    }
}

//console.log(pig_count, cow_count, chicken_count);

function random_num(min, max) {
    var result = Math.floor(Math.random() * (max - min + 1)) + min;  //genera un numero aleatorio entre el min y el max.
    return result;
}