import { items } from './data'
import { notFound } from 'next/navigation'
import Link from 'next/link'

const getData = cat => {
  const data = items[cat]

  if(data) {
    return data
  } else {
    return notFound()
  }
}

export default function Category({params}){

  const data = getData(params.category)

  return(
    <div className='my-10'>
      <div className='flex flex-col items-center justify-center mx-auto my-5'>
        <h1 className="text-2xl font-black text-center uppercase ">{params.category}</h1>
        <Link href="/portfolio" className='transition hover:text-purple-700'>back to gallery</Link>
      </div>
      <div className='flex flex-wrap justify-center gap-3'>
        {
          data.map(item => (
            <div className={`rounded-lg h-72 w-64 ${item.color}`} key={item.id}/>
          ))
        }
      </div>
    </div>
  )
}