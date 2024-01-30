interface topCategory {
    categories:string[],
    Accessories:string[],
}


interface Container {
    items:string[],
}




export const TopCategory: topCategory ={
    categories:["Computer & Laptop","SmartPhone","Headphone"],
    Accessories:["Camera & Photo","TV & Homes"],
}


export const Links: Container ={
    items:["Shop Product","Shoping Cart","Wishlist","Compare","Track Order","Customer Help","About Us"],
}

export const Tags: Container ={
    items:["Game","iPhone","Asus Laptops","TV","Macbook","Graphics Card","SSD","Power Bank ","Smart TV","Speaker","Tablet","Samsung"],
}