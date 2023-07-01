"use client"

import { signIn, useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import googlePic from 'public/google.png'
import spinner from 'public/spinner.png'
import { useSearchParams } from 'next/navigation'
import Link from "next/link"
import { XCircle } from "@phosphor-icons/react"

export default function Login(){

  const searchParams = useSearchParams()

  const session = useSession()
  const router = useRouter()
  const [err, setErr] = useState(false)

  const handleSubmitSignIn = async (e) => {
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value

    signIn("credentials", {email, password})
  }

  const handleSubmitRegister = async (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })

      res.status === 201 && router.push("/dashboard/login?success=Account has been created")
    } catch (error) {
      setErr(true)
    }
    e.target.reset()
  }

  if(session.status === 'loading'){
    return <Image src={spinner} width={100} height={100} alt="" className="mx-auto animate-spin"/>
  }

  if(session.status === 'authenticated'){
    router?.push('/dashboard')
  }

  return(
    <div className="my-10">
      <h1 className="mb-3 text-4xl font-black text-center uppercase text-violet-950">Ready to join us?</h1>
      <p className="max-w-2xl mx-auto mb-10 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vitae unde illo, molestiae impedit consequuntur debitis totam autem iure accusantium. Soluta reprehenderit mollitia quas, aperiam tempore ullam blanditiis praesentium nobis.</p>
      {
        searchParams.get('success') ? <div className="flex items-center justify-between max-w-lg gap-5 px-10 py-5 mx-auto mb-10 font-bold text-center text-white bg-green-600 rounded-md">
          <p>Your account has been created successfully!</p>
          <Link href="/dashboard/login"><XCircle size={24} /></Link>
        </div> : <p></p>
      }
      {/* WRAPPER */}
      <div className="flex flex-wrap items-stretch justify-center gap-10">
        {/* GOOGLE */}
        <div className="flex items-center p-10 bg-white rounded-2xl">
          <div className="flex flex-col items-center">
            <h2 className="text-lg text-center">Sign in with Google!</h2>
            <h3 className="mb-5 text-center">No need for any other registration.</h3>
            <button 
              onClick={() => signIn("google")}
              className="flex items-center gap-3 p-3 text-sm font-bold uppercase border-2 border-gray-300 rounded-md"
            >
              <Image src={googlePic} width={30} height={30} alt="google logo"/>
              <p className="text-lg text-gray-600">sign in with google</p>
            </button>
          </div>
        </div>
        {/* REGISTER */}
        <div className="p-10 bg-white rounded-2xl">
          <h2 className="mb-3 text-lg text-center">Or <strong>register</strong> with credentials.</h2>
          <form
            className="flex flex-col max-w-sm gap-2 mx-auto"
            onSubmit={handleSubmitRegister}
          >
            <input 
              type="text" 
              placeholder="username" 
              required
              className="px-5 py-3 border-2 rounded-md border-violet-400"
            />
            <input 
              type="text" 
              placeholder="email" 
              required
              className="px-5 py-3 border-2 rounded-md border-violet-400"
            />
            <input 
              type="password" 
              placeholder="password" 
              required
              className="px-5 py-3 border-2 rounded-md border-violet-400 "
            />
            <button className="p-3 text-sm font-bold text-white uppercase rounded-md bg-violet-700">register</button>
          </form>

          {
            err && "Something went wrong..."
          }
        </div>
        {/* SIGN IN */}
        <div className="p-10 bg-white rounded-2xl">
          <h2 className="text-lg text-center">Already have an account?</h2>
          <h3 className="mb-5 text-center">Sign in right now!</h3>

          <form
            className="flex flex-col max-w-sm gap-2"
            onSubmit={handleSubmitSignIn}
          >
            <input 
              type="text" 
              placeholder="Email" 
              required
              className="px-5 py-3 border-2 rounded-md border-violet-400"
            />

            <input 
              type="password" 
              placeholder="Password" 
              required
              className="px-5 py-3 border-2 rounded-md border-violet-400"
            />
            <button className="p-3 text-sm font-bold text-white uppercase rounded-md bg-violet-700">login</button>
          </form>
        </div>
        
      </div>
    </div>
  )
}