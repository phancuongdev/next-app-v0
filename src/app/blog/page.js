// import Link from "next/link";

// export default function Page() {
//   return (
//     <>
//       <h1>This is Blog Page</h1>
//       <Link href="/">Home Page</Link>
//     </>
//   );
// }

export default async function Page() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
