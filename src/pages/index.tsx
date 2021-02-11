import {useAuth} from "../hooks/useAuth";
import {useEffect} from "react";
import Layout from "../components/Layout";
import {NextPage} from "next";

interface Props {
  ssrWorking: boolean;
}

const Home: NextPage<Props> = (props) => {
  const {user} = useAuth();
  useEffect(() => {
    console.log('Home:user', user)
  }, [user])

  return (
      <Layout>
        {props.ssrWorking ? (
            <>
              <img src="/assets/success.jpg" height="200"/>
              <p> Deployment Successful of Nextjs Application with SSR on Firebase: <b>getServerSideProps()</b>. </p>
              <p>NEXT_PUBLIC_HELLOWORLD={process.env.NEXT_PUBLIC_HELLOWORLD}</p>
            </>
        ) : (
            <h2>SSR not working</h2>
        )}
        {user && <div>User ID: {user.uid} | name: {user.name}</div>}
      </Layout>
  );
};

export async function getServerSideProps() {
  return { props: { ssrWorking: true } };
}

export default Home;