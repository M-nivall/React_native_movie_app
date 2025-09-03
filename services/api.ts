export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers:{
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovies = async ({query}: {query: string}) => {
    const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint,{
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    });

    if(!response.ok) {
        //@ts-ignore
        throw new Error('Failed to fetch movies', response.statusText); 
    }

    const data = await response.json();
    return data.results;
}





//const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
//const options = {
//  method: 'GET',
//  headers: {
//    accept: 'application/json',
//    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzRiN2Y4MDFjOTU0N2Y3NWZhNjQ1OGEzM2E2NWEyZSIsIm5iZiI6MTc1NjgxNzcyMS43NDg5OTk4LCJzdWIiOiI2OGI2ZTkzOTZkZDE2ZjEwMGIzY2Q5NjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-EdihdVHgJ6FcopplzINOY_DpBMNfWZN1vutqYW6BCw'
//  }
//};

//fetch(url, options)
//  .then(res => res.json())
//  .then(json => console.log(json))
//  .catch(err => console.error(err));