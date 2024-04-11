import { getHollywoodMovie } from '@/services/movie.service'
import React from 'react'

const HollywoodMovieComponent = async () => {
    const movieData = await getHollywoodMovie();
    console.log("movie data", movieData);
  return (
    <div className='gap-3 flex  overflow-x-auto  no-scrollbar '>
    {/* card block */}
    {movieData.payload.map((data) => (
        <div>
            <div key={data.movie_id} className='w-[400px] '>
            <a class="p-8 max-w-lg border border-gray-200 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
                href={`/movie/${data.movie_id}`}>
                <img src={data.image} class="shadow rounded-lg overflow-hidden border" />
                <div class="mt-8 ">
                    <h4 class="font-bold text-xl line-clamp-1">{data.movie_title}</h4>
                    <p class="mt-2 text-gray-600 line-clamp-2">{data.description}
                    </p>

                </div>
            </a>
        </div>
        </div>
    )
    )}

</div>
  )
}

export default HollywoodMovieComponent