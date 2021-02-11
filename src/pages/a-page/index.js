import Layout from "../../components/Layout";

export default function Register(props) {
    return (
        <Layout>
            <h1> Hello world </h1>
            <h2> {props.text}</h2>
        </Layout>
    );
}

export async function getServerSideProps() {
    return {props: {text: 'Server side text'}};
}
  