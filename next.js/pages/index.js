import Seo from "../components/Seo";
import { useEffect, useState } from "react";

export default function Home({ results }) {
  // const [movies, setMovies] = useState();
  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (await fetch(`/api/movies`)).json();
  //     setMovies(results);
  //   })();
  // }, []);

  return (
    <>
      <Seo title="홈" />
      {!results && <h4>Loading...</h4>}
      {results?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();

  return {
    props: {
      results,
    },
  };
}
