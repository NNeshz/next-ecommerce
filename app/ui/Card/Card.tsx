import Image from "next/image";

interface ICard {
  title: string;
  price: number;
  category: string;
  image: string[];
}

export default function Card({ title, price, category, image }: ICard) {
  return (
    <div className="rounded-md flex flex-col items-baseline h-full">
      <Image
        src={image[0]}
        alt={`Image for ${title}`}
        width={342}
        height={100}
        className="rounded-md"
      />
      <div className="flex flex-col w-full mt-2 flex-grow">
        <p className="text-xl font-semibold">$ {price}</p>
        <h2 className="font-medium truncate">{title}</h2>
        <p className="text-zinc-500">{category}</p>
      </div>
      <button className="w-full bg-yellow-400 rounded-md text-zinc-950 font-semibold py-2 mt-2">
        Add to cart
      </button>
    </div>
  );
}