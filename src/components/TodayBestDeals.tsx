
const TodayBestDeals:React.FC = () => {
  return (
    <div className="w-[97%] mx-[1.5%]">
        <header className="flex">
                <div className="">
                    <h2 className="font-ps font-[600] text-[24px] text-[#191C1F]">Best Deals</h2>
                    <span className="font-ps font-[400] text-[14px]">Deals ends in</span>
                    <div className="flex px-[12px] py-[6px] gap-[6px] bg-[#F3DE6D]">
                        <div className="font-ps font-[400] text-[#191C1F]">16d :</div>
                        <div className="font-ps font-[400] text-[#191C1F]">21h :</div>
                        <div className="font-ps font-[400] text-[#191C1F]">57m :</div>
                        <div className="font-ps font-[400] text-[#191C1F]">23s</div>
                    </div>
                </div>
        </header>
    </div>
  )
}

export default TodayBestDeals