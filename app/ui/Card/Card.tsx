import Image from "next/image"

interface ICard {
    title: string;
    price: number;
    category: string;
    image: string[];
}

export default function Card({ title, price, category, image }: ICard) {
    return (
        <div className="bg-zinc-400 px-2 py-2 rounded-md">
            <Image src={image[0]} alt={`Image for ${title}`} width={290} height={100} className="rounded-md" />
            <div className="flex flex-col">
                <h2 className="font-bold text-xl mt-2">{title}</h2>
                <p>{category}</p>
                <p>{price}</p>
            </div>
            <div>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-md mt-2">Add to cart</button>
            </div>
        </div>
    )
}
