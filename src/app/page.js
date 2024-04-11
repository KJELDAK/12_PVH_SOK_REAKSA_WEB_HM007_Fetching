import ActionMovieComponent from "@/components/ActionMovieComponent";
import AllMovieComponent from "@/components/AllMovieComponent";
import DramaMovieComponent from "@/components/DramaMovieComponent";
import AnimeMovieComponent from "@/components/AnimeMovieComponent";
import HollywoodMovieComponent from "@/components/HollywoodMovieComponent";
import ScienceFictionMovieCpmponent from "@/components/ScienceFictionMovieCpmponent";

export default function Home() {
  return (
    <main>
      <div >
       <div> <img src="../bg-img.png" alt="" className='w-full h-full'/></div>
        <div >
          <h1 className="my-6 font-bold">All Movie &gt; </h1>
          <AllMovieComponent />
        </div>
        <div>
          <h1 className="my-6 font-bold">
            Action Movie &gt;
          </h1>
          <ActionMovieComponent/>
        </div>
        <div>
          <h1 className="my-6 font-bold">
            Drama Movie &gt;
          </h1>
          <DramaMovieComponent/>
        </div>
        <div>
          <h1 className="my-6 font-bold">
            Anime &gt;
          </h1>
          <AnimeMovieComponent/>
        </div>
        <div>
          <h1 className="my-6 font-bold">Hollywood &gt;</h1>
          <HollywoodMovieComponent/>
        </div>
        <div>
          <h1 className="my-6 font-bold">
            Science fiction Movie &gt;
          </h1>
          <ScienceFictionMovieCpmponent/>
        </div>
      </div>


    </main>

  );
}
