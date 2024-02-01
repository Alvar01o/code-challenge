import ProductType from "../models/ProductType"

const Product: React.FC<{ product: ProductType }> = (props) => {
    return (
        <div className="w-1/4 p-4 shadow-sm">
            <img className="transition-transform transform hover:scale-105" src={props.product.image} alt="" />
            <p>{props.product.name} { props.product.hasDiscount && 
            <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">50%</span>
            }</p>
            <p className="font-bold	">{props.product.brand}</p>
            <p className="text-sm">{props.product.description}</p>
            <p className="text-xl">${props.product.price}</p>
        </div>
    )
}

export default Product;