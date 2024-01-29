import { TrendCategories } from "../../assets/data/TrendProductsData";
const TrendProducts = () => {
  return (
    <div className="w-[97%] mx-[1.5%] flex justify-center items-start gap-[24px]">
      {TrendCategories.map((category, index) => {
        return (
          <div key={index} className="flex flex-col items-start gap-[16px]">
            <h5 className="text-[#191C1F] font-semibold leading-[24px]">
              {category.title}
            </h5>
            {category.products.map((product) => {
              return (
                <div className="flex p-[12px] items-center justify-center gap-[10px] border border-[#E4E7E9]">
                  <img src={`${product.imgUrl}`} alt="" />
                  <div className="flex flex-col items-start gap-[8px]">
                    <p className="text-[#191C1F] font-semibold leading-[20px] text-[14px] line-clamp-2">
                      {product.desc}
                    </p>
                    <span className="text-[#2DA5F3] font-semibold leading-[20px] text-[14px]">
                      {product.price}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TrendProducts;
