import Nav from "../components/Nav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <style jsx global>{`
        div {
          background: green;
        }

        .use {
          background: yellow;
        }
      `}</style>
    </>
  );
}
