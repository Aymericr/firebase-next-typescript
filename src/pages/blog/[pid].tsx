import {useRouter} from "next/router";
import Error from "next/error";
import Layout from "../../components/Layout";
import {postData} from '../../lib/blog';

export async function getStaticPaths() {
    return {
        paths: postData.map(p => ({
            params: {
                pid: p.pid
            }
        })),
        fallback: true,
    };
}

export async function getStaticProps({params}) {
    return {
        props: {
            post: postData.find(p=> p.pid === params.pid)
        }
    };
}

// posts will be populated by getStaticProps() at either:
// - build time
// - first request
function Post({post}) {
    const router = useRouter();

    if (!router.isFallback && !post) {
        return <Error statusCode={404} title="No Blog Post with the provided ID"/>;
    }

    if (router.isFallback) {
        return (
            <div className="container">
                <main>
                    <div>Loading...</div>
                </main>
            </div>
        );
    }

    return (
        <Layout>
            <b>ID: {post.pid}</b>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.content}}/>
        </Layout>
    );
}

export default Post;
