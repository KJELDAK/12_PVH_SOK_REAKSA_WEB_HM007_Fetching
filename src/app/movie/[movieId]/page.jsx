import { getMovieByIdService } from "@/services/movie.service";

const MovieDetails = async ({params}) => {
    const data = await getMovieByIdService(params.movieId);
    console.log("product data",data)
    return (
        <main>
            <div className="bg-blue-200 dark:bg-gray-800 py-8 min-h-screen ">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-[300px] ml-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className="md:col-span-1">
                            <div className="h-[400px] md:h-[460px] w-full rounded-lg mb-4">
                                <img className="w-full h-auto object-cover" src={data.payload.image} alt="movie Image" />
                            </div>
                        </div>
                        <div className="md:col-span-1 px-4  md:ml-12">
                            <div > 
                                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{data.payload.director}</h2>
                                <p className="text-[16px]">{data.payload.runtime} mn</p>
                                <i>{data.payload.genre}</i>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                                    ante justo. Integer euismod libero id mauris malesuada tincidunt.
                                </p>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">{data.payload.movie_title}</span>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-5">
                                        {data.payload.description}  
                                    </p>
                                </div>
                                <div className="mt-8 ">
                                    <p className="text-sm">{data.payload.posted_at}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 
export default MovieDetails;
