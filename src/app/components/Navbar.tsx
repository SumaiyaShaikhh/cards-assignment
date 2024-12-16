import Image from "next/image"
import Link from "next/link"

export default function Navbar(){
    return (
        <div className="flex flex-row">
<div>
<Image
src="/image/link"
alt="logo"
width={100}
height={100} 
/>
<div className="flex flex=row bg-green-700 h-10 items-center w-full text-white font-bold">
    <Link href="/Home" className="mx-4">Home</Link>
    <Link href="/About" className="mx-4">About</Link>
    <Link href="/Service" className="mx-4">Service</Link>
    <Link href="/Contact" className="mx-4">Contact</Link>
    </div>
    <main>
        <section className="flex justify-center gap-5 h-auto w-full p-4 mt-8">
            <div className="h-80 w-[450px] bg-black rounded-md shadow-2xl"></div>
            <div className="h-80 w-[450px] bg-black rounded-md shadow-2xl"></div>
            <div className="h-80 w-[450px] bg-black rounded-md shadow-2xl"></div> 
        </section>

        <section className="flex justify-center gap-5 h-auto w-full p-4 mt-8">
            <div className="h-80 w-[450px] bg-black rounded-md shadow-2xl"></div>
            <div className="h-80 w-[450px] bg-black rounded-md shadow-2xl"></div>
            </section>
        </main>
</div>
</div>
    )};