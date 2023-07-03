import Image from "next/image";
import {notFound} from 'next/navigation'

async function getData(id) {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/posts/${id}`, { cache: 'no-store' });

    if (!res.ok) {
      return null;
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching post data:', error);
    return null;
  }
}

export async function generateMetadata({params}) {
  const post = await getData(params.id)
  return {
    title: `laschisa's - ${post.title}`,
    description: post.description,
  }
}

export default async function Post({params}){

  const data = await getData(params.id)

  return(
    <div className="mb-20">
      <Image src={data.img} width={1000} height={500} className="object-cover w-full h-72 rounded-3xl" alt=""/>
      <div className="flex flex-col items-center justify-between my-12 md:flex-row">
        <div className="text-center md:text-left">
          <h1 className="mb-2 text-3xl font-bold md:text-5xl">{data.title}</h1>
          <h2 className="text-md md:text-xl">{data.subtitle}</h2>
        </div>
        <span className="mt-3 text-left md:m-0"><strong>written by:</strong> {data.username}</span>
      </div>
      <div className="">{data.content}</div>
    </div>
  )
}