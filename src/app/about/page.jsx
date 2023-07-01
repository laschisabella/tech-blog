import Image from 'next/image'
import aboutPic from 'public/about.png'

export default function About(){
  return(
    <div className='mb-10'>
      <Image src={aboutPic} width="1200" height="1200" alt="" className='object-cover w-full rounded-3xl'/>

      <div className='flex flex-col gap-16 p-10 mx-5 bg-white md:flex-row rounded-b-3xl'>
        <div className=''>
          <h2 className='mb-3 text-2xl font-bold text-purple-950'>Who are we?</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit consequuntur eveniet quam sapiente, fugit laboriosam nihil iste nulla unde recusandae autem, facere porro eius, est pariatur non cupiditate nobis rem?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit consequuntur eveniet quam sapiente, fugit laboriosam nihil iste nulla unde recusandae autem, facere porro eius, est pariatur non cupiditate nobis rem?</p>
        </div>
        <div className='relative'>
          <h2 className='mb-3 text-2xl font-bold text-purple-950'>What we do?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illum consequuntur molestias! Dolor quae ad facere maxime excepturi quas, laboriosam vitae suscipit at ut accusantium obcaecati expedita, incidunt perferendis in!</p>
          <ul className='my-3 list-disc list-inside'>
            <li>Nice bullet point</li>
            <li>Nice bullet point</li>
            <li>Nice bullet point</li>
          </ul>
          <button className="px-10 py-2 font-bold text-white transition bg-pink-500 rounded md:absolute right-5 bottom-1 hover:bg-pink-700">CONTACT US</button>
        </div>
      </div>
    </div>
  )
} 