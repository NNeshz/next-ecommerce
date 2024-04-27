import Image from "next/image";

interface ICategoryCard {
    image: string;
    title: string;
}

export default function CategoryCard({ image, title } : ICategoryCard) {
  return (
    <div>
        <div className="transform transition-transform duration-500 hover:scale-105">
            <Image src={image} alt={`Image for ${title}`} width={290} height={100} className="rounded-md mb-2" />
        </div>
        <h4 className="text-xl font-semibold">{title}</h4>
    </div>
  )
}