//export default ProductType, and ProductTypeCollection
class ProductType {
    id: number;
    name: string;
    price: number;
    description: string;
    hasDiscount: boolean;
    image: string;
    brand: string;

    constructor(id: number, name: string, price: number, description: string, hasDiscount: boolean, image: string, brand: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.hasDiscount = hasDiscount;
        this.image = image;
        this.brand = brand;

    }
}


export default ProductType;