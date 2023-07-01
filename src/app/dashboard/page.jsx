"use client"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import useSWR from "swr"
import spinner from "public/spinner.png"
import blog from "public/blog1.png"

export default function Dashboard(){

  const session = useSession()
  const router = useRouter()

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const {data, error, isLoading, mutate} = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const title = e.target[0].value
    const subtitle = e.target[1].value
    const img = e.target[2].value
    const content = e.target[3].value

    try {
      await fetch("/api/posts",{
        method: "POST",
        body: JSON.stringify({
          title, 
          subtitle, 
          img, 
          content, 
          username: session.data.user.name,
        }),
      })
      mutate()
      e.target.reset()
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeletePost = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      })
      mutate()
    } catch (error) {
      console.log(error)
    }
  }

  if(session.status === 'loading'){
    return <Image src={spinner} width={100} height={100} alt="" className="mx-auto animate-spin"/>
  }
  if(session.status === 'unauthenticated'){
    router?.push('/dashboard/login')
  }

  if(session.status === 'authenticated'){
    return(
      <div className="flex flex-col justify-between gap-16 mx-5 my-10 lg:flex-row lg:mx-0 md:mx-16">
        <div>
          <h1 className="mb-2 font-black text-center uppercase">Write a new one!</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input type="text" placeholder="Title" className="px-5 py-3 rounded-md"/>
            <input type="text" placeholder="Subtitle" className="px-5 py-3 rounded-md"/>
            <input type="text" placeholder="Image (url from unsplash only!!)" className="px-5 py-3 rounded-md"/>
            <Link href="https://unsplash.com/" className="ml-3 -mt-4 font-bold text-pink-600 underline transition hover:text-pink-800">go to unsplash </Link>
            <textarea cols="40" rows="10" placeholder="Content" className="px-5 py-3 rounded-md"/>
            <button className="px-10 py-2 mx-auto font-bold transition bg-pink-500 rounded md:mx-0 text-violet-100 hover:bg-pink-700">send</button>
          </form>
        </div>
        <div className="w-full">
          <h1 className="mb-2 font-black text-center uppercase">manage your posts</h1>
          <ul className="flex flex-col gap-5">
            {
              isLoading ? <Image src={spinner} width={100} height={100} alt="" className="mx-auto animate-spin"/> :
              
              data.length > 0 ? 
              data?.map(post => (
                <li className="relative flex flex-col items-center gap-5 px-10 py-4 bg-white rounded-md md:flex-row" key={post._id}>
                  <Image src={post.img} width={100} height={100} alt="" className="object-cover w-20 h-20 rounded-md"/>
                  <div className="text-center md:mr-28 md:text-left">
                    <h1 className="text-lg font-bold">{post.title}</h1>
                    <p>{post.subtitle}</p>
                    <Link href={`/blog/${post._id}`} className="text-xs font-black uppercase transition text-violet-600 hover:text-violet-900">view post</Link>
                  </div>
                  <span onClick={() => handleDeletePost(post._id)} className="px-5 py-2 text-xs font-black text-white uppercase transition bg-red-500 rounded-md cursor-pointer md:absolute right-10 hover:bg-red-700">delete</span>
                </li>
              )) : <div className="m-10 text-center">
                <h1 className="text-lg font-semibold text-violet-900">No posts here...</h1>
                <p className="mb-10">Why not try writing your first one?</p>
                <Image src={blog} width={300} height={300} alt="" className="object-cover mx-auto my-5 rounded-md w-52 h-52"/>
              </div>
            }
          </ul>
          
        </div>
      </div>
    )
  }

}