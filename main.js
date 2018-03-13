$.get("query.php", function(data){
    alert("Data: " + data);
    document.getElementById("php").innerHTML = "Retrieved data: " + data;
    randomArray = parseNumbers(data);
    var c = document.getElementById("bitmap");
    var ctx = c.getContext("2d");
    var img = ctx.createImageData(128, 128);
    console.log(img.data.length);
    for (j = 0; j < 350; j += 1) {
    for (i = 0; i < 350; i += 4) {
        img.data[i*j] = randomArray[i];
        img.data[i*j+1] = randomArray[i+1];
        img.data[i*j+2] = randomArray[i+2];
        img.data[i*j+3] = 255;
    }
    }
    ctx.putImageData(img, 10, 10);
});

var parseNumbers = function(randomString) {
    randomArray = [];
    var i = 0;
    var count = 0;
    var currNum = "";
    while (i < 381){
        if (randomString.charCodeAt(count) != 9){
            while (randomString.charCodeAt(count) != 9) {
                currNum += randomString[count];
                count += 1;
            }
            randomArray[i] = parseInt(currNum);
            currNum = "";
            i += 1; 
        } else {
            count += 1;
        }
    }
    console.log(randomArray);
    return randomArray;
}