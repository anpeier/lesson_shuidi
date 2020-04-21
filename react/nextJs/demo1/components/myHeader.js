import Head from "next/head";

const MyHeader = ({ title, charSet }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet={charSet}></meta>
      </Head>
    </>
  );
};

export default MyHeader;
