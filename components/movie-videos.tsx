import { API_URL } from "../app/constants";
import styles from "../styles/movie-videos.module.scss";

async function getVideos(id: string) {
  // console.log(`Fetching videos: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("something broke...");
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  const numVideos = 2;
  let frontVideos = [];

  for (let i = 0; i <= numVideos; i++) {
    videos[i] && frontVideos.push(videos[i]);
  }

  return (
    <div className={styles.container}>
      {frontVideos.map((video) => (
        <iframe
          key={video.id}
          title={video.name}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        />
      ))}
    </div>
  );
}
