"use client";

import Link from "next/link";
import styles from "../styles/movie.module.scss";
import { useRouter } from "next/navigation";

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
  release_date: string;
}

export default function Movie({
  title,
  id,
  poster_path,
  release_date,
}: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link prefetch href={`/movies/${id}`}>
        <span className={styles.text_date}>📅 {release_date}</span>
        <em className={styles.title}>{title}</em>
      </Link>
    </div>
  );
}
