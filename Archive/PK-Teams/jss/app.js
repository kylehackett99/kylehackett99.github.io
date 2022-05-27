
const pokedex = document.getElementById("pokedex");

const fetchPokemon = () => {

    const promises = [];

    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }

    Promise.all(promises).then((results) => {
         pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join('/'),
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
    });
};



const displayPokemon = (pokemon) => {
    
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <tr>
            <td><div class="checkbox">
            <label><input type="checkbox" value=""></label>
            </div></td>
            <td>${pokeman.id}</td>
            <td><img src="${pokeman.image}"/></td>
            <td>${pokeman.name}</td>
            <td>${pokeman.type}</td>
            <td>${pokeman.hp}</td>
            <td>${pokeman.attack}</td>
            <td>${pokeman.defense}</td>
            <td>${pokeman.sp_attk}</td>
            <td>${pokeman.sp_def}</td>
            <td>${pokeman.speed}</td>
            <td>${pokeman.bst}</td>
        </tr>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
}


fetchPokemon();