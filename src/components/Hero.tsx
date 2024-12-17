import Image from "next/image";
export default function Hero(){
return(
    <main className="w-full flex justify-between items-start bg-yellow-200">
"
        {/*left*/}
        <div className="w-[500px] mt-9 md:mt-700 ml-5">
            <h1 className="text-2xl md:text-5xl mg-800 pd-500 font-bold h-[276px] w-[440px] top-[900px] left-[202px]">Rocket single seater</h1>
            <button className=" w-200 h-40px text-sm underline">Shop now</button>
        </div>
        {/*right*/}
        <div>
            <Image src={"/profile.png"} className="w-[500px]" width={853} height={800} alt="profile"></Image>
        </div>
    </main>
)
}