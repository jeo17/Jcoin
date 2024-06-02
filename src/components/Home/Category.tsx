import { Categories } from "../../assets/data/CategoryData";
const Category: React.FC = () => {
  return (
    <div className="flex flex-col gap-[40px] relative">
      <h1 className="text-[32px] font-[600] text-center text-[#191C1F] leading-[40px]">
        Shop with Categorys
      </h1>

      <div className="w-full flex gap-[18px] items-center">
        <div className="p-[12px] bg-[#FA8232] rounded-[50%] absolute left-[-20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20.25 12H3.75"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 5.25L3.75 12L10.5 18.75"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="p-[12px] bg-[#FA8232] rounded-[50%] absolute right-[-20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3.75 12H20.25"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.5 5.25L20.25 12L13.5 18.75"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {Categories.map((cate) => {
          return (
            <div
              key={cate.id}
              className=" flex-grow rounded-[4px] border border-[#E4E7E9] p-[24px] flex flex-col gap-[16px] justify-center items-center"
            >
              <img
                src={cate.imageUrl}
                alt="product_category"
                className="w-[148px] h-[148px]"
              />
              <h4 className="text-[#191C1F] leading-[24px] font-[600]">
                {cate.title}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
