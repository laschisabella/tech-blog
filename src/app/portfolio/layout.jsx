export default function Layout({children}){
  return(
    <div className="my-20 text-center">
      <h1 className="mb-4 text-5xl font-bold text-violet-950">Our Work</h1>
      <p className="max-w-2xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quam, nulla qui necessitatibus eveniet corrupti voluptates porro nobis ab explicabo esse ex repellnim voluptas earum?</p>
      {children}
    </div>
  )
}