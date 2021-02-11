import Link from "next/link";
import Layout from "../../components/Layout";
import {postData} from '../../lib/blog';

export async function getServerSideProps(context) {
    return {props: {posts: postData}};
}

function Blog(props) {
    const initialPosts = props.posts;
    return (
        <Layout>
            {initialPosts &&
            initialPosts.map(p => <p><Link href={`/blog/${p.pid}`}>{p.title}</Link></p>)}
        </Layout>
    );
}

export default Blog;
