import Card from "../Card/Card"

interface IProduct {
    id: string;
    title: string;
    price: number;
    category: {
        name: string;
    };
    images: string[];
}

async function getProuducts() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")

    if (!res.ok) {
        throw new Error("Error fetching products")
    }

    return res.json()
}

export default async function Products() {

    const products = await getProuducts()

    return (
        <div className="flex w-full flex-col">
            <h1 className="text-5xl font-bold mb-8">Products</h1>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                {
                    products.map((product: IProduct) => {

                        let newImagesArray: string[] = [];

                        product.images.forEach((imageURL: string) => {
                            let newImageURL = imageURL.replace(/[\[\]"]/g, ''); // Eliminar corchetes y comillas
                            newImagesArray.push(newImageURL);
                        });

                        return (
                            <Card
                                key={product.id}
                                title={product.title}
                                price={product.price}
                                category={product.category.name}
                                image={newImagesArray}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
