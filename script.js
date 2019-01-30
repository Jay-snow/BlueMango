const jsContainer = document.getElementById("js");

/* Template literals are a thing, and they are amazing. */
jsContainer.innerHTML = `
  <div class="demo">
    Hello JS
  </div>
`;

const reactContainer = document.getElementById("react");

ReactDOM.render(
    React.createElement(
      "div",
      { className: "demo" },
      "Hello React"
    ),
    reactContainer
  );


//Initialize variables


var player = {
	name: 'Earth',
	level: 1,
	title: ' the whelp'
}; 

//Adds 1 value to the timer
function add(){
	time = time + 1; 
	timerID.innerHTML = time;
}



function createSummoner(){
	items_Summoner = items_Summoner + 1;
	summonerID.innerHTML = items_Summoner;
	localStorage.setItem("items_Summoner", items_Summoner);
	totalItems[0] = localStorage.getItem("items_Summoner", items_Summoner);

}

var time = 0;
const timerID = document.getElementById("timer");
const summonerID = document.getElementById("summoners");
const worshipperID = document.getElementById("worshippers");
const playerTitle = document.getElementById("player-title");
const destroyTimerID = document.getElementById("destroy-timer");
const createGuyID = document.getElementById("create-guy");
const createSummonerID = document.getElementById("create-summoner");
const profileTitleID = document.getElementById("profile-title");

var items_Summoner = 0;
var items_Worshipper = 0;
// [summoner,worshipper]
var totalItems = [0,0];
var power = 0;

//Trying to puzzle out the following:
//Want this wipeTimer function to work while within the gameinit function.
//Want to learn how to call this function within another function to better learn how scope works.
//I know this code works if I move out wipeTimer(), but I want to try and get it to work within
// the gameinit function. Right now I'm trying to return everything into an object, and set that object
// to be the wipeTimer() function. Not working so far, but I'v learned you can return objects!

//Right now I think I need to make "time" an object itself. This way I can reset it's values by use of
// it's methods, rather than a series of one-off function calls. I think that will make my code more 
//readable - I need to look into some object oriented stuff to see if I'm right in this train on thought.

function wipeTimer(){
	time = 0;
	items_Summoner = 0;
	summonerID.innerHTML = 0;
	timerID.innerHTML = localStorage.getItem('time');
	localStorage.setItem("time", time);
	localStorage.setItem("items_Summoner", items_Summoner);
	totalItems[0] = localStorage.getItem("items_Summoner", items_Summoner);
	var obj =  {
		time: time,
		items_Summoner: items_Summoner,
		timerID: timerID,
		clearTime: localStorage.setItem("time", time),
		clearItem: localStorage.setItem("items_Summoner", items_Summoner),
		totalItems: totelItems[0]
	}
	return obj;
}

var { 
	 time: time,
	 items_Summoner: items_Summoner,
	 timerID: timerID,
	 //clearTime: localStorage.setItem("time", time),
	 //clearItem: localStorage.setItem("items_Summoner", items_Summoner),
	 totalItems: totelItems[0]
	} = wipeTimer();



//Draws the game elements to the screen
function gameinit(){

//Sets the value of the timer to 0, and removes the item from localstorage.


playerTitle.innerHTML = `
	<p> <small> ` + player.name + player.title + ` </small> </p>
`;

destroyTimerID.innerHTML = `
	<button onclick="wipeTimer();"> Destroy all skeletons! </button> 
`;

createGuyID.innerHTML = `
	<button onclick="add();"> Summon a guy! </button> 
`;

createSummonerID.innerHTML = `
	<button onclick="createSummoner();"> Create Summoner </button>
`;

profileTitleID.innerHTML =`
	<h1>` + player.name + `</h1>
`;

//Check to see if time exists in storage. If it doesn't, set it to 0.
if (localStorage.getItem("time") === null )
{
	localStorage.setItem("time", "0");
	timerID.innerHTML = '<p>' + parseInt(localStorage.getItem("time")) + '</p>';

} else {
	time = parseInt(localStorage.getItem("time", time));
	items_Summoner = parseInt(localStorage.getItem("items_Summoner", items_Summoner));
}

//Updates timer all the time too much of the time. Also saves the time all the time. Bad idea?
setInterval(function(){
	timerID.innerHTML = '<p>' + time + ' unit of eco-danger</p>';
	localStorage.setItem("time", time);
}
	, 1)

//Adds to the timer every second.
setInterval( function(){
	power = parseInt(totalItems[0]);
	time = time + power;
}, 500);



};