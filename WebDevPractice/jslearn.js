// Notes
// === is more specific -> 1 === '1' results in false but 1 == '1' is true
// arrays can hold any type (think JSON)
// arrays are lists, queues, stacks too
//console.log() print

function loadData() {

    var num = Math.floor(Math.random() * 898 + 1);

    let file = "https://pokeapi.co/api/v2/pokemon/" + num;
    fetch (file).then(x => x.text()).then(y => updatePage(y));
  }


function updatePage(string){

    const obj = JSON.parse(string);

    var name = obj.name;
    var image = obj.sprites.front_default;

    document.getElementById("demo").innerHTML = obj.name;
    var img = document.getElementById("pkmn");
    img.src = image;
}

function addToTeam() {
    var image = document.getElementById("pkmn").src;
    var img = new Image();
    img.src = image;

    if(team.length >= 6){
        alert("Hey a team can only have 6 members!");
        return;
    }

    team.push(img);
    updateTeamUI();
}

function removeFromTeam(){
    team.pop();
    updateTeamUI();
}

function updateTeamUI(){
    
    document.getElementById("team").innerHTML = '';
    for(var i = 0; i < team.length; i++){
        document.getElementById("team").appendChild(team[i]);
    }

}




  var intervalId = window.setInterval(loadData, 1000);

  var team = [];