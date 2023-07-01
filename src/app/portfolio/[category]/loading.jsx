import Image from "next/image";
import spinner from "public/spinner.png"

export default function Loading(){
  return <Image src={spinner} width={100} height={100} alt="" className="mx-auto animate-spin"/>
}