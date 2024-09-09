const myDiv = document.getElementById("container");

myDiv.addEventListener("mouseover", function() {
    myDiv.style.backgroundColor = "grey";
});

myDiv.addEventListener("mouseout", function() {
    myDiv.style.backgroundColor = "brown";
});