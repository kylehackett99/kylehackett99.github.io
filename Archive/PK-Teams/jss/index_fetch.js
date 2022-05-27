
const pokedex1 = document.getElementById("pokedex1");
const pokeMod = document.getElementById("pokeMod");

var selectedMon = [];


const getPokemon = () => {

    const promises = [];

    let i = Math.floor((Math.random() * 800) + 1);
    
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
    

    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name.charAt(0).toUpperCase() + result.name.slice(1),
            image: result.sprites['front_default'],
            types: result.types,
            abilities: result.abilities,
            id: Number(result.id),
            hp: Number(result.stats[0]['base_stat']),
            attack: Number(result.stats[1]['base_stat']),
            defense: Number(result.stats[2]['base_stat']),
            sp_attk: Number(result.stats[3]['base_stat']),
            sp_def: Number(result.stats[4]['base_stat']),
            speed: Number(result.stats[5]['base_stat']),
            bst: Number(result.stats[0]['base_stat']) + Number(result.stats[1]['base_stat']) + 
            Number(result.stats[2]['base_stat']) + Number(result.stats[3]['base_stat']) +
            Number(result.stats[4]['base_stat']) + Number(result.stats[5]['base_stat']),
        }));
        showPokemon(pokemon);
        makepokeModal(pokemon);
    });
};

const showPokemon = (pokemon) => {

    selectedMon.push(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
            <div class="card-body text-center">
            <h1>${pokeman.name}</h1>
            <img class="card-image" src="${pokeman.image}" alt="Image not Found" style="float: none; margin: 0 auto;"/>
            </div>
        `)
        .join('');
    pokedex1.innerHTML = pokemonHTMLString;

    
}

const  makepokeModal = () => {

    
    let count = 0;
    var ability_string = "";
    var type_string = "";

    //Get string of abilities
    for (var c in selectedMon[0][0].abilities) {
        count = count + 1;
    }
    for(var i = 0; i < count; i++)
    {
        ability_string += (selectedMon[0][0].abilities[i].ability.name).charAt(0).toUpperCase() +(selectedMon[0][0].abilities[i].ability.name).slice(1);
        ability_string += '/'
    }   
    ability_string = ability_string.substring(0, ability_string.length - 1);
    count = 0;

    //Get string of types
    for (var c in selectedMon[0][0].types) {
        count = count + 1;
    }
    for(var i = 0; i < count; i++)
    {
        type_string += (selectedMon[0][0].types[i].type.name).charAt(0).toUpperCase() +(selectedMon[0][0].types[i].type.name).slice(1);
        type_string += '/'
    }   
    type_string = type_string.substring(0, type_string.length - 1);

    

    console.log(selectedMon)
    var mon;
    var pokemonHTMLString2;

    mon = `
   <!-- Modal content -->
    <div class="modal-content">
      <div class="modal-header">
        <h1> #${selectedMon[0][0].id}  ${selectedMon[0][0].name}</h1>  
        <div onclick="closeModal()" class="close">&times;</div>
      </div>
      <div class="modal-body">
      
        <img src="${selectedMon[0][0].image}">
        <h2>Type: ${type_string}</h2>
        <h3>Abilities: ${ability_string}<h3>
        

        <div>
        <table align="center">
            <tr>
                <th>HP: ${selectedMon[0][0].hp}</th><th>ATTACK: ${selectedMon[0][0].attack}</th>
            </tr>
            <tr>
                <th>DEFENSE: ${selectedMon[0][0].defense}</th><th>SP.ATK: ${selectedMon[0][0].sp_attk}</th>
            </tr><tr>
                <th>SP.DEF: ${selectedMon[0][0].sp_def}</th><th>SPEED: ${selectedMon[0][0].speed}</th>
            </tr>
            <tr>
                <th colspan="2">BST:${selectedMon[0][0].bst}</th>  
            </tr>
        
        </table>
        </div>

      
    </div>
    
   
   `;
   pokemonHTMLString2 += mon;


    pokeMod.innerHTML = pokemonHTMLString2;
}







function toTeam(){
    window.location.href='team.html';
}


getPokemon();