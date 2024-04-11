// Get Movie
export async function getAllMoiveService (){
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api');
    // conver from json object to js object
    const data = res.json();
    return data;
}
//get Action Movie
export async function getActionMovieService (){
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=Action`);
    // conver from json object to js object
    const data = res.json();
    return data;
}
//get Dara Movie
export async function getDramaMovieService (){
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=Drama`);
    // conver from json object to js object
    const data = res.json();
    return data;
}
//get science fiction movie
export async function getAnimeMovie (){
    const res = await fetch (`https://movie-api-get-only-bmc3.vercel.app/api?genre=Anime`);
    const data = res.json();
    return data;
}
//get Hollywood movie
export async function getHollywoodMovie (){
    const res = await fetch (`https://movie-api-get-only-bmc3.vercel.app/api?genre=Hollywood`);
    const data = res.json();
    return data;
}
//get science fiction movie 
export async function getScienceFictionMovie (){
    const res = await fetch (`https://movie-api-get-only-bmc3.vercel.app/api?genre=Science_Fiction`);
    const data = res.json();
    return data;
}
//get movie by id
export async function getMovieByIdService(id){
    const res = await fetch (`https://movie-api-get-only-bmc3.vercel.app/api/${id}`);
    const data = res.json();
    return data;
}