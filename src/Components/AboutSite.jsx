import { Fragment } from "react";
import moviesImage from "../assets/movies.jpg";

function AboutSite() {
  return (
    <Fragment>
      <div className="flex items-center justify-center gap-50 w-full mr-40 h-full max-h-144.75 p-20">
        <div className="flex flex-col gap-22 w-full max-w-133.25 h-full max-h-144.75">
          <h1 className="text-2xl font-bold dark:text-white">About TVmaze</h1>
          <p className="text-gray-600 max-w-161.5 dark:text-zinc-400">
            fast services, super fast updates in movies and series, and a lot of
            other features that you can find in this website. We are trying to
            make your experience better and better. always watch the latest
            movies and series with us. We are always here to help you and we are
            always here to make your experience better and better.
          </p>

          <button className="max-w-50 w-full h-13 font-bold rounded-lg border border-purple-500 text-purple-500 dark:border-[#8864FE] dark:text-[#8864FE]">
            learn more
          </button>
        </div>

        <img
          className="h-105 w-103.25 rounded-2xl object-cover"
          src={moviesImage}
          alt="Movies and series collection"
        />
      </div>
    </Fragment>
  );
}

export default AboutSite;
