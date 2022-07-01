import { useRouter } from "next/router";
export default function Detail({ params }) {
  console.log(params);
  const router = useRouter();
  const [title, id] = params || [];
  return <h4>{title}</h4>;
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}
