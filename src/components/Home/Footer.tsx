
const Footer = () => {
  return (
    <div className="flex py-[72px] px-[1.5%] items-start gap-[24px] bg-[#191C1F]">
   
   <div className="flex flex-col items-start gap-[24px]">
    <div className="flex justify-center items-center gap-[8px]">
       <img className="w-12 h-12" src="https://via.placeholder.com/48x48" />
       <h1 className="text-[32px] text-white font-bold leading-[40px]">Jcoin</h1>
    </div>
     <div className="flex flex-col items-start gap-[12px]">
        <div className="flex flex-col items-start gap-[4px]">
            <label className="text-[#77878F] text-[14px] leading-[20px]">Customer Supports:</label>
            <p className="text-white text-[18px] leading-[24px]">(629) 555-0129</p>
        </div>
        <p className="text-[#ADB7BC] leading-[24px]">4517 Washington Ave. Manchester, Kentucky 39495</p>
        <p className="text-white leading-[24px]">abdeldjalildh990@gmail.com</p>
     </div>
   </div>


   <div className=""></div>
    
    </div>
  )
}

export default Footer