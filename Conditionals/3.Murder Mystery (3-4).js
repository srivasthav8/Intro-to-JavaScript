/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room==="dining room" && suspect ==="Mr. Parkes") {
    
    solved=true;
    weapon="knife";
    
} else if (room==="gallery" && suspect ==="Ms. Van Cleve") {
    solved=true;
    weapon="trophy";
    
} else if (room==="billiards room" && suspect ==="Mrs. Sparr") {
    solved=true;
    weapon="pool stick";
    
} else {
    solved=true;
    room="ballroom";
    weapon="poison";
    suspect="Mr. Kalehoff";
    
}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " +weapon+ "!");
}
