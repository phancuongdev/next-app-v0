function generateStaticParams() {}

export default function Page({ params }) {
  const { slug } = params; // Next.js truyền params trực tiếp vào props

  return <h1>Bài viết: {slug}</h1>;
}
