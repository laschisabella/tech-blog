import Image from "next/image";
import Link from "next/link";

async function getData() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/posts`, { cache: 'no-store' });

    if (!res.ok) {
      return null;
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching all posts:', error);
    return null;
  }
}
export default async function Blog(){

  const data = await getData()

  return(
    <div className="my-5">
      <div className="text-center mb-14">
        <h1 className="mb-3 text-5xl font-bold text-purple-950">Discussion Blog</h1>
        <h2 className="max-w-xl mx-auto text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iure nemo tempora possimus quis magni amet aspernatur quas tenetur quam sit modi, laborum saepe in vitae illo excepturi dolor iste.</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mx-auto">
      {
        data?.map(item => (
          <Link href={`/blog/${item._id}`} className="flex flex-col items-center w-full gap-5 p-5 text-center transition bg-white md:text-left md:flex-row lg:w-5/12 rounded-xl hover:bg-purple-300" key={item._id}>
            <Image src={item.img} alt="" width={300} height={300} className="object-cover w-40 h-40 rounded-xl"/>
            <div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p>{item.subtitle}</p>
              <br />
              <p>written by: {item.username}</p>
            </div>
          </Link>
        ))
      }
      </div>
    </div>
  )
}