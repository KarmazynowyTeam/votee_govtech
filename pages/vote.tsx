import Layout from "../components/Layout";
import Router, { useRouter } from "next/router";
import authContainer from "../containers/auth";
import Vote from "../components/Segments/Vote";

const Main = () => {
  !authContainer.state.isLoggedIn && Router.push("/voting");
  var router = useRouter();
  const id = router.query.id && router.query.id;
  return (
    <Layout>
      <div id="voting">
        <Vote id={id} />
      </div>
    </Layout>
  );
};

export default Main;
