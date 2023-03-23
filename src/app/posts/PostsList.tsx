import Link from 'next/link';
import React from 'react'
import { Post } from '../../../typings';

const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const posts: Post[] = await res.json();
    return posts;
}

async function PostsList() {
    const posts = await fetchPosts()

    return <>
        {posts.map((post) => (
            <p key={post.id}>
                <Link href={`/posts/${post.id}`}>Post: {post.id}</Link>
            </p>
        ))}
    </>;
}

export default PostsList