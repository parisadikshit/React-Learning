
export const getPokemonImage = (pokemonName) => {
    return new Promise((resolve, reject) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data =>{
            const imageUrl = data.sprites.front_default;
            console.log(imageUrl,'image')
            resolve(imageUrl)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}