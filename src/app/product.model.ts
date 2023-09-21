export interface ProductModelServer {
    id: Number;
    name: String;
    price: Number;
    category: String; 
    subCategory: String;
    description: String;
    shortDescription:String;
    stock: Number;
    primaryImage: String;
    images: String;
  }
  
  
  export interface serverResponse  {
    count: number;
    products: ProductModelServer[]
  };
  