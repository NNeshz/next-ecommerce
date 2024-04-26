import Image from "next/image";

interface ICategoryCard {
    image: string;
    title: string;
}

export default function CarecoryCard({ image, title } : ICategoryCard) {
  return (
    <div>
        <Image src={image} alt={`Image for ${title}`} width={290} height={100} className="rounded-md mb-2" />    
        <h4 className="text-xl font-semibold">{title}</h4>
    </div>
  )
}
