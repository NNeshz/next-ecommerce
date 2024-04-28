export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: {
    name: string;
  };
  images: string[];
}

export interface ICategory {
  id: number;
  name: string;
  image: string;
}
