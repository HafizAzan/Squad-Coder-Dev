export default function Page({ params }) {
  //   throw new Error("error hai");
  let lan = ["python", "js", "java"];
  if (lan.includes(params.id)) {
    return <p>My Post: {params.id}</p>;
  } else {
    return <p>My Post not found</p>;
  }
  return <p>My Post: {params.id}</p>;
}
