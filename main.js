$.get("query.php", function(data){
    alert("Data: " + data);
    document.getElementById("php").innerHTML = data;
});