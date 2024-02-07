
import { getMainProducts } from "app/services/shopify/products"

export const GET = async () => {
    const data = await getMainProducts()
    return Response.json(data)
}