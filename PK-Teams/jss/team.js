const pk1 = document.getElementById("pk1");
const pk2 = document.getElementById("pk2");
const pk3 = document.getElementById("pk3");
const pk4 = document.getElementById("pk4");
const pk5 = document.getElementById("pk5");
const pk6 = document.getElementById("pk6");

const pokeModal = document.getElementById("pokeModal");

const weakTable = document.getElementById("weakTable")
const resistTable = document.getElementById("resistTable")

const alertDiv = document.getElementById("alertDiv")

function AddToTeam(pokemon){
	var temp;

	 if (team.length < 6)
	 {
		team.push(pokemon);

		switch(team.length)
		{
			case 1:
				temp = fillMon(0)
				pk1.innerHTML = temp[0]
				pokeMod.innerHTML = temp[1]
				break;
			case 2:
				temp = fillMon(1);
				pk2.innerHTML = temp[0]
				pokeMod2.innerHTML = temp[1]
				break;
			case 3:
				temp = fillMon(2);
				pk3.innerHTML = temp[0]
				pokeMod3.innerHTML = temp[1]
				break;
			case 4:
				temp = fillMon(3);
				pk4.innerHTML = temp[0]
				pokeMod4.innerHTML = temp[1]
				break;
			case 5:
				temp = fillMon(4);
				pk5.innerHTML = temp[0]
				pokeMod5.innerHTML = temp[1]
				break;
			case 6:
				temp = fillMon(5);
				pk6.innerHTML = temp[0]
				pokeMod6.innerHTML = temp[1]
				break;
		}	
		resistances()	
	 }
	 else{
		var alert = `
			<div id="alertNotif" class="alert alert-danger alert-dismissible">
    			<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
    			<strong>Hey!</strong> Your Team is Full! Clear it or Remove Members!
  			</div>
		`;	

		alertDiv.innerHTML = alert
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		 
	 }

	 
}

function removeFromTeam(x){
	x++;
	switch(x)
		{
			case 1:
				pk1.innerHTML = pk2.innerHTML;
				pk2.innerHTML = pk3.innerHTML;
				pk3.innerHTML = pk4.innerHTML;
				pk4.innerHTML = pk5.innerHTML;
				pk5.innerHTML = pk6.innerHTML;
				pk6.innerHTML = emptyMon(6);
				break;
			case 2:
				pk2.innerHTML = pk3.innerHTML;
				pk3.innerHTML = pk4.innerHTML;
				pk4.innerHTML = pk5.innerHTML;
				pk6.innerHTML = emptyMon(6);
				break;
			case 3:
				pk3.innerHTML = pk4.innerHTML;
				pk4.innerHTML = pk5.innerHTML;
				pk5.innerHTML = pk6.innerHTML;
				pk6.innerHTML = emptyMon(6);
				break;
			case 4:
				pk4.innerHTML = pk5.innerHTML;
				pk5.innerHTML = pk6.innerHTML;
				pk6.innerHTML = emptyMon(6);
				break;
			case 5:
				pk5.innerHTML = pk6.innerHTML;
				pk6.innerHTML = emptyMon(6);
				break;
			case 6:
				pk6.innerHTML = emptyMon(6);
				break;
		}		

	team.splice(x - 1,1);
	
	if(team.length == 5){pk6.innerHTML = emptyMon()}
	if(team.length ==4){pk6.innerHTML = emptyMon(); pk5.innerHTML = emptyMon();}
	if(team.length == 3){pk6.innerHTML = emptyMon(); pk5.innerHTML = emptyMon(); pk4.innerHTML = emptyMon();}
	if(team.length ==2){pk6.innerHTML = emptyMon(); pk5.innerHTML = emptyMon(); pk4.innerHTML = emptyMon(); pk3.innerHTML = emptyMon();}	
	if(team.length ==1){pk6.innerHTML = emptyMon(); pk5.innerHTML = emptyMon(); pk4.innerHTML = emptyMon(); pk3.innerHTML = emptyMon(); pk2.innerHTML = emptyMon();}
	if(team.length ==0){pk6.innerHTML = emptyMon(); pk5.innerHTML = emptyMon(); pk4.innerHTML = emptyMon(); pk3.innerHTML = emptyMon(); pk2.innerHTML = emptyMon(); pk1.innerHTML = emptyMon();}
	
	resistances()
}

function clearTeam()
{
	team.splice(0,team.length)
	pk1.innerHTML = emptyMon()
	pk2.innerHTML = emptyMon()
	pk3.innerHTML = emptyMon()
	pk4.innerHTML = emptyMon()
	pk5.innerHTML = emptyMon()
	pk6.innerHTML = emptyMon()
	resistances()
	//$('html, body').animate({scrollTop: $("#pk1").offset().top}, 200);
	
}


function emptyMon(){
	 var emptyMonString = `
		<h5 class="card-title center">Empty Team Slot</h5>
		<img class="card-image" src="/kylehackett99.github.io/PK-Teams/jss/icons8-pokeball-100.png">
   `;	
   return emptyMonString;
}

function fillMon(x){

		var count = 0;
		var type_string = "";
		var ability_string = "";

	//Get string of Types
        for (var c in team[x].types) {
            count = count + 1;
		}
        
        for(var i = 0; i < count; i++)
        {
            type_string += (team[x].types[i].type.name).charAt(0).toUpperCase() +(team[x].types[i].type.name).slice(1);
			type_string += '/'
        }   
        type_string = type_string.substring(0, type_string.length - 1);
		count = 0;
		

        //Get string of Abilities
        for (var c in team[x].abilities) {
            count = count + 1;
        }
        for(var i = 0; i < count; i++)
        {
            ability_string += (team[x].abilities[i].ability.name).charAt(0).toUpperCase() +(team[x].abilities[i].ability.name).slice(1);
            ability_string += '/'
        }   
        ability_string = ability_string.substring(0, ability_string.length - 1);
        count = 0;



	fillMonString = `
		<h5 class="card-title center">${team[x].name}</h5>
		<img class="card-image center" src="${team[x].image}">
   `;

	var modalString  = `
   
		<!-- Modal content -->
		<div class="modal-content">
		<div class="modal-header">
			<h1> #${team[x].id}  ${team[x].name}</h1>  
			<div onclick="closeModals()" class="close">&times;</div>
		</div>
		<div class="modal-body">
		
			<img src="${team[x].image}">
			<h2>Type: ${type_string}</h2>
			<h3>Abilities:${ability_string}</h2><h3>
			

			<div>
			<table align="center">
				<tr>
					<th>HP: ${team[x].hp}</th><th>ATTACK: ${team[x].attack}</th>
				</tr>
				<tr>
					<th>DEFENSE: ${team[x].defense}</th><th>SP.ATK: ${team[x].sp_attk}</th>
				</tr><tr>
					<th>SP.DEF: ${team[x].sp_def}</th><th>SPEED: ${team[x].speed}</th>
				</tr>
				<tr>
					<th colspan="2">BST:${team[x].bst}</th>  
				</tr>
			
			</table>
			</div>

   `;


	return [fillMonString, modalString]
}


 // When the user clicks the button, open the modal 
  function openModal() {
	if(team[0] == null){return}
    modal.style.display = "block";
  }
  function openModal2() {
	if(team[1] == null){return}
    modal2.style.display = "block";
  }
  function openModal3() {
	if(team[2] == null){return}
    modal3.style.display = "block";
  }
  function openModal4() {
	if(team[3] == null){return}
    modal4.style.display = "block";
  }
  function openModal5() {
	if(team[4] == null){return}
    modal5.style.display = "block";
  }
  function openModal6() {
	if(team[5] == null){return}
    modal6.style.display = "block";
  }



//https://webdesires.co.uk/knowledge-base/sort-table-by-column-using-javascript-text-sort-number-sort/
var asc = 0;
function sort_table(table, col)
{
	$('.sortorder').remove();
	if (asc == 2) {asc = -1;} else {asc = 2;}
	var rows = table.tBodies[0].rows;
	var rlen = rows.length-1;
	var arr = new Array();
	var i, j, cells, clen;
	// fill the array with values from the table
	for(i = 0; i < rlen; i++)
	{
		cells = rows[i].cells;
		clen = cells.length;
		arr[i] = new Array();
		for(j = 0; j < clen; j++) { arr[i][j] = cells[j].innerHTML; }
	}
	// sort the array by the specified column number (col) and order (asc)
	arr.sort(function(a, b)
	{
		var retval=0;
		var col1 = a[col].toLowerCase().replace(',', '').replace('$', '').replace(' usd', '')
		var col2 = b[col].toLowerCase().replace(',', '').replace('$', '').replace(' usd', '')
		var fA=parseFloat(col1);
		var fB=parseFloat(col2);
		if(col1 != col2)
		{
			if((fA==col1) && (fB==col2) ){ retval=( fA > fB ) ? asc : -1*asc; } //numerical
			else { retval=(col1 > col2) ? asc : -1*asc;}
		}
		return retval;      
	});
	for(var rowidx=0;rowidx<rlen;rowidx++)
	{
		for(var colidx=0;colidx<arr[rowidx].length;colidx++){ table.tBodies[0].rows[rowidx].cells[colidx].innerHTML=arr[rowidx][colidx]; }
	}
	
	hdr = table.rows[1].cells[col];
	if (asc == -1) {
		$(hdr).html($(hdr).html() + '<span class="sortorder">▲</span>');
		} else {
		$(hdr).html($(hdr).html() + '<span class="sortorder">▼</span>');
	}
}
function sortTable(n) {
	sort_table(document.getElementById("myTable"), n);
}

//Search Bar
/* Code By Webdevtrick ( https://webdevtrick.com ) */
(function(document) {
	'use strict';
 
	var TableFilter = (function(Arr) {
 
		var _input;
 
		function _onInputEvent(e) {
		_input = e.target;
		var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
		Arr.forEach.call(tables, function(table) {
		Arr.forEach.call(table.tBodies, function(tbody) {
		Arr.forEach.call(tbody.rows, _filter);
		});
		});
		}
 
		function _filter(row) {
		var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
		row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
		}
 
		return {
		init: function() {
		var inputs = document.getElementsByClassName('light-table-filter');
		Arr.forEach.call(inputs, function(input) {
		input.oninput = _onInputEvent;
		});
		}
		};
	})(Array.prototype);
 
	document.addEventListener('readystatechange', function() {
		if (document.readyState === 'complete') {
		TableFilter.init();
		}
	});
 
})(document);

function gen_types(){

	//generate types and their weaknesses from pokeAPI
	const promises = [];
	var type;

    for (let i = 1; i < 19 ; i++) {
        const url = `https://pokeapi.co/api/v2/type/${i}/`;
        promises.push(fetch(url).then((res) => res.json()));
	}
	
	Promise.all(promises).then((results) => {
		type = results.map((result) => ({
		   name: result.name,
		   damage_relations:  result.damage_relations,
	   }));
	   typesFromAPI = type;
   });
	

}

function resistances(){

	var resistString = "";
	var weakString = "";

	var teamTypes = new Array()

	var teamWeaknesses = new Array()

	var count = 0;

	var weak = new Array();
	var resist = new Array();
	
   	
	//Get types from each pokemon in team
	for(let t in team){
		
		//Gets number of types the pokemon possesses
    	for (var c in team[t].types) {
			count = count + 1;
			var name = (team[t].types[c].type.name)
			teamTypes.push(name)
		}
	}
	
	//Adds pokemon type stats to team
	for(var j in teamTypes){

		for(var i in typesFromAPI){
			if(typesFromAPI[i].name == teamTypes[j]){
					teamWeaknesses.push(typesFromAPI[i])
			}
		}
		
	}
	
	//retrieves weaknesses and resistances for each type in list
	for(var i in teamWeaknesses){

		for(var j in teamWeaknesses[i].damage_relations.double_damage_from ){
			weak.push(teamWeaknesses[i].damage_relations.double_damage_from[j].name)
		}
		for(var j in teamWeaknesses[i].damage_relations.half_damage_from){
			resist.push(teamWeaknesses[i].damage_relations.half_damage_from[j].name)
		}
		
	}

	
	var temp;
	
	//if typestring is in weak as well as resist, remove it from both as the default case is neutral damage
	for(var j in resist){
		if(weak.includes(resist[j]))
		{
			temp = resist[j];
			resist.splice(j,1);
			weak.splice(weak.indexOf(temp),1)

		}
	}	

	//Calculate Weaknesses
	var counts = {};
	for (var i = 0; i < weak.length; i++) {
		var num = weak[i];
		counts[num] = counts[num] ? counts[num] + 1 : 1;
	}
	weak = [...new Set(weak)]
	for(var i = 0; i < weak.length; i++){
		var str = " x" + counts[weak[i]] * 2
		weak[i] += str
		console.log(weak[i])

	}

	//Calculate Resistances
	var counts = {};
	for (var i = 0; i < resist.length; i++) {
		var num = resist[i];
		counts[num] = counts[num] ? counts[num] + 1 : 1;
	}
	resist = [...new Set(resist)]
	for(var i = 0; i < resist.length; i++){
		var str = " x1/" +  counts[resist[i]] * 2 
		resist[i] += str
		console.log(resist[i])

	}

	//if team has zero members, then change htmlString to show that there is no pokemon to display weaknesses
	//replace HTML in weaknesses section using innerHTML
	//table of  weaknesses and resistances
	
	for(var i = 0; i in weak; i++)
	{
		var a = i;
		i++;
		var b = i;
		i++
		var c = i;

		if(weak[a] == undefined){weak[a] = ""}
		if(weak[b] == undefined){weak[b] = ""}
		if(weak[c] == undefined){weak[c] = ""}

		weakString += `<tr> <td><h4>${weak[a]}</h4></td> <td><h4>${weak[b]}</h4></td> <td><h4>${weak[c]}</h4></td> <tr>`
		
	}
	weakTable.innerHTML = weakString


	for(var i = 0; i in resist; i++)
	{
		var a = i;
		i++;
		var b = i;
		i++
		var c = i;

		if(resist[a] == undefined){resist[a] = ""}
		if(resist[b] == undefined){resist[b] = ""}
		if(resist[c] == undefined){resist[c] = ""}

		resistString += `<tr> <td><h4>${resist[a]}</h4></td> <td><h4>${resist[b]}</h4></td> <td><h4>${resist[c]}</h4></td> <tr>`
		
	}
	resistTable.innerHTML = resistString

	count = 0;
}


var typesFromAPI = []
var team = [];

gen_types();



