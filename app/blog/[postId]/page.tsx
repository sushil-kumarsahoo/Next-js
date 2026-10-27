// blog/1
// blog/2

import axios from "axios";
import { connection } from 'next/server';

export default async function BlogPage({ params }: { params: Promise<{ postId: string }> }) {
    await connection();
  const { postId } = await params;

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );
  const data = response.data;

  return (
    <div>
      Blog page {postId}
      <br />
      title - {data.title}
      <br />
      body - {data.body}
    </div>
  );
}
