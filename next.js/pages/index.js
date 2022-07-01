import Seo from "../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Home({ results }) {
  // const [movies, setMovies] = useState();
  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (await fetch(`/api/movies`)).json();
  //     setMovies(results);
  //   })();
  // }, []);

  const router = useRouter();
  const goToDetail = (id, title) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title: title,
        },
      },
      `/movies/${id}`
    );
  };

  return (
    <>
      <Seo title="홈" />
      {!results && <h4>Loading...</h4>}
      {results?.map((movie) => (
        <div
          onClick={() => {
            goToDetail(movie.id, movie.original_title);
          }}
          key={movie.id}
        >
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
