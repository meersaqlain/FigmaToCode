import Image from "next/image";
const FigmaToCode = () => {
    return (
        <div>
         <div className="w-[420] h-[852] bg-[#FFFFFF] border ">
       <div className=" flex justify-center items-center">
       <Image src="/iPhone14.png" alt="ProductOne" title="iphone" width={200} height={200} />
       </div>
       <h3 className="text-center pt-4 font-medium text-base">
                    Apple iPhone 14 Pro Max 512 GB
                </h3>

                <div className="flex justify-center">
                    <button className="rounded-lg pt-3 mt-5 pb-3 bg-black text-white w-[183px] h-12">
                        Buy Now
                    </button>
                </div>

         </div>
        </div>
    )
}

export default FigmaToCode;