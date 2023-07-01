import Image from "next/image";
import Link from "next/link";
import mobile from "public/mobile.png"
import website from "public/websites.png"
import painting from "public/illustrations.png"

export default function Portfolio(){
  return(
    <div className="mt-10">
      <h2 className="my-5 text-2xl font-black text-center uppercase">Choose a gallery</h2>
      <div className="flex flex-col items-center justify-center gap-10 my-12 md:flex-row">
        <Link 
          href="/portfolio/illustrations"
          className="transition hover:brightness-125"
        >
          <Image src={painting} width="300" height="300" alt="" className=""/>
          <span className="inline-block my-5 font-black uppercase text-purple-950">Illustrations</span>  
        </Link> 
        <Link 
          href="/portfolio/websites"
          className="transition hover:brightness-125"
        >
          <Image src={website} width="300" height="300" alt="" className=""/>
          <span className="inline-block my-5 font-black uppercase text-purple-950">Websites</span>  
        </Link> 
        <Link 
          href="/portfolio/mobile"
          className="transition hover:brightness-125"
        >
          <Image src={mobile} width="300" height="300" alt="" className=""/>
          <span className="inline-block my-5 font-black uppercase text-purple-950">Mobile Applications</span>  
        </Link> 
      </div>
    </div>
  )
}