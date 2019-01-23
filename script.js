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
var time = 0;
var timerID = document.getElementById("timer");
var summonerID = document.getElementById("summoners");
var worshipperID = document.getElementById("worshippers");

var items_Summoner = 0;
var items_Worshipper = 0;
// [summoner,worshipper]
var totalItems = [0,0];
var power = 0

//Adds 1 value to the timer
function add(){
	time = time + 1; 
	timerID.innerHTML = time;
}

//Sets the value of the timer to 0, and removes the item from localstorage.
function wipeTimer(){
	time = 0;
	items_Summoner = 0;
	summonerID.innerHTML = 0;
	timerID.innerHTML = localStorage.getItem('time');
	localStorage.setItem("time", time);
	localStorage.setItem("items_Summoner", items_Summoner);
	totalItems[0] = localStorage.getItem("items_Summoner", items_Summoner);
}

function createSummoner(){
	items_Summoner = items_Summoner + 1;
	summonerID.innerHTML = items_Summoner;
	localStorage.setItem("items_Summoner", items_Summoner);
	totalItems[0] = localStorage.getItem("items_Summoner", items_Summoner);

}

//Check to see if time exists in storage. If it doesn't, set it to 0.
if (localStorage.getItem("time") === null )
{
	localStorage.setItem("time", "0");
	timerID.innerHTML = parseInt(localStorage.getItem("time"));

} else {
	time = parseInt(localStorage.getItem("time", time));
	items_Summoner = parseInt(localStorage.getItem("items_Summoner", items_Summoner));
}

//Updates timer all the time too much of the time. Also saves the time all the time. Bad idea?
setInterval(function(){
	timerID.innerHTML = time;
	localStorage.setItem("time", time);
}
	, 1)

//Adds to the timer every second.
setInterval( function(){
	power = parseInt(totalItems[0]);
	time = time + power;
}, 500);  