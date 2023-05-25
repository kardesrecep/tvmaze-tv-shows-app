
const baseUrl = "https://api.tvmaze.com";


const searchShows = (query, cb) => {
    const url = `${baseUrl}/search/shows?q=${query}`;
    fetch(url)
    .then( (resp) => resp.json() )
    .then( (data) => cb(data) )
}


const getShowDetails=(showId)=>{
    const url = `${baseUrl}/shows/${showId}`;
    fetch(url)
    .then( (resp) => resp.json() )
    .then( (data) => cb(data) )

}


export {searchShows,getShowDetails};