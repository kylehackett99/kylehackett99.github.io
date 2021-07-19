const pokedex = document.getElementById("pokedex");




const fetchPokemon = () => {

    var num = 898;
    var max = 10158;
    var pokedex = new Array(num).fill({});
    const promises = [];

    for (let i = 1; i <= num; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    for(let i = 10001; i <= max; i++)
    {
       if(i > 10079 && i < 10086){continue}
       if(i > 10092 && i < 10093){continue}
       if(i > 10092 && i < 10100){continue}
       if(i > 10120 && i < 10123){continue}
       if(i > 10127 && i < 10147){continue}
       if(i > 10147 && i < 10151){continue}
       if(i > 10152 && i < 10155){continue}
            const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
            promises.push(fetch(url).then((res) => res.json()));
        
        
    }

    

    Promise.all(promises).then((results) => {
         pokemon = results.map((result) => ({
            name:  result.name.charAt(0).toUpperCase() + result.name.slice(1),
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
        
        displayPokemon(pokemon);
        for(let i = 0; i < num ; i++)
        {
            pokedex[i] = pokemon[i]
        };
        

    });
    return pokedex;
    
};



const displayPokemon = (pokemon) => {
    
    let count = 0;
    var ability_string = "";
    var type_string = "";
    var j = 0;
    var pokemonHTMLString = "";
    var row;
    var generation = "";
    var num;
    var isLegend = "";

    for(j; j < pokemon.length; j++)
    {
        
        //Get string of Types
        for (var c in pokemon[j].types) {
            count = count + 1;
        }
        
        for(var i = 0; i < count; i++)
        {
            type_string += (pokemon[j].types[i].type.name).charAt(0).toUpperCase() +(pokemon[j].types[i].type.name).slice(1);
            type_string += '/'
        }   
        type_string = type_string.substring(0, type_string.length - 1);
        count = 0;

        //Get string of Abilities
        for (var c in pokemon[j].abilities) {
            count = count + 1;
        }
        for(var i = 0; i < count; i++)
        {
            ability_string += (pokemon[j].abilities[i].ability.name).charAt(0).toUpperCase() +(pokemon[j].abilities[i].ability.name).slice(1);
            ability_string += '/'
        }   
        ability_string = ability_string.substring(0, ability_string.length - 1);
        count = 0;

        //Gets Generation
        num = pokemon[j].id;
        if(num <= 151){generation = "Gen-1"}
        else if(num > 151 && num <= 251){generation="Gen-2"}
        else if(num > 251 && num <= 386){generation="Gen-3"}
        else if(num > 386 && num <= 493){generation="Gen-4"}
        else if(num >493 && num <= 649){generation="Gen-5"}
        else if(num > 649 && num <= 721){generation="Gen-6"}
        else if (num > 721 && num <= 809){generation="Gen-7"}
        else if(num > 809 && num <= 896){generation="Gen-8"}

        //Gets Legendary
        if(num >= 144 && num <= 146){isLegend = "Legendary"}
        else if(num == 150 || num == 151){isLegend = "Legendary"}
        else if(num >= 243 && num <= 245){isLegend = "Legendary"}
        else if(num >= 249 && num <= 251){isLegend = "Legendary"}
        else if(num >= 377 && num <= 386){isLegend = "Legendary"}
        else if(num >= 480 && num <= 494){isLegend = "Legendary"}
        else if(num >= 638 && num <= 649){isLegend = "Legendary"}
        else if(num >= 716 && num <= 721){isLegend = "Legendary"}
        else if(num >= 785 && num <= 792){isLegend = "Legendary"}
        else if(num >= 793 && num <= 799){isLegend = "UltraBeast"}
        else if(num >= 800 && num <= 802){isLegend = "Legendary"}
        else if(num >= 805 && num <= 806){isLegend = "UltraBeast"}
        else if(num >= 807 && num <= 809){isLegend = "Legendary"}
        else if(num >= 888 && num <= 893){isLegend = "Legendary"}


        var image = "/images/icons8-pokeball-100.png"
        //sets image if there is none 
            //REPLACE IMAGE WITH CUSTOM ONE
        if(pokemon[j].image == null){pokemon[j].image = image}
        

        row = `<tr>
            <td> <img src="${pokemon[j].image}"> <button type="button" class="btn btn-info" onclick="AddToTeam(pokemon[${j}])">Add to Team</button></td>
            <td>${pokemon[j].name}</td>
            <td>${pokemon[j].id}</td>
            <td>${type_string}</td>
            <td id="hide">${ability_string}</td>
            <td>${pokemon[j].hp}</td>
            <td>${pokemon[j].attack}</td>
            <td>${pokemon[j].defense}</td>
            <td>${pokemon[j].sp_attk}</td>
            <td>${pokemon[j].sp_def}</td>
            <td>${pokemon[j].speed}</td>
            <td>${pokemon[j].bst}</td>
            <td id="hide">${generation}</td>
            <td id="hide">${isLegend}</td>
        </tr>`;
        pokemonHTMLString += row;
        type_string = "";
        ability_string = "";
        generation = ""
        isLegend = "";
}
       

    pokedex.innerHTML = pokemonHTMLString;
}



var dex;
dex = fetchPokemon();







