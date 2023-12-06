
var alphabet = "abcdefghijklmnopqrstuvwxyz";


var secretKey = getRandomKey();


function getRandomKey() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}


var keyList = document.getElementById("key-list");


document.body.addEventListener("keydown", function(event) {
  
    if (event.key === secretKey) {
        
        var listItem = document.createElement("li");
        listItem.textContent = "SECRET KEY PRESSED";
        keyList.appendChild(listItem);

        
        secretKey = getRandomKey();
    }
});
