import Posts from "@/models/Post"
import Post from "@/models/Post"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async request => {

  const url = new URL(request.url)
  const username = url.searchParams.get("username")

  try {
    await connect()

    const data = await Post.find(username && { username })
    return new NextResponse(JSON.stringify(data), {status:200})
  } catch (error) {
    return new NextResponse(`GET route failed, error: ${error}`, {status:500})
  }
}


export const POST = async request => {

  const body = await request.json()
  const newPost = new Posts(body)

  try {
    await connect()
    await newPost.save()
    
    return new NextResponse('Post has been created', {status:201})
  } catch (error) {
    return new NextResponse(`GET route failed, error: ${error}`, {status:500})
  }
} 