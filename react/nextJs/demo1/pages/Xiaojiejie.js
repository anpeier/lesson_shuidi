import { withRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const Xiaojiejie = ({ router, name }) => {
  return (
    <>
      <div>{router.query.name}来为我服务了</div>
      <Link href="/">
        <a>{name}</a>
      </Link>
    </>
  );
};

Xiaojiejie.getInitialProps = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      axios("")
        .then((res) => {
          console.log("远程数据结果：", res);
          resolve({ name: "lap" });
        })
        .catch((err) => {
          console.log(err);
          reject({ name: "lap" });
        });
    }, 1000);
  });
};

export default withRouter(Xiaojiejie);
