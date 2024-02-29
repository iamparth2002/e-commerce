import ProductModel from "@/Models/Product";
import { initMongoose } from "@/lib/mongoose";


export const GET = async (request) => {
    try {
        await initMongoose()
        const products = await ProductModel.find()

        return new Response(JSON.stringify(products), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 