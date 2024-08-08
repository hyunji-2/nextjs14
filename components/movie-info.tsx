import { API_URL } from "../app/constants";
import style from "../styles/movie-info.module.scss";

export async function getMovie(id: string) {
  // console.log(`Fetching movies: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={style.container}>
      <img className={style.poster} src={movie.poster_path} alt={movie.title} />
      <div className={style.info}>
        <h1 className={style.title}>{movie.title}</h1>
        <h3>📅 {movie.release_date}</h3>
        <h3>⏱️ {movie.runtime}</h3>
        <h3>{movie.origin_country}</h3>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank">
          Homepage &rarr;
        </a>

        <div className={style.production_companies}>
          {movie.production_companies.map((item) => (
            <div className={style.production_companies_inner}>
              <img src={item.logo_path} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
