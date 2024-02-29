import { initMongoose } from '@/lib/mongoose';
import ProductModel from '@/Models/Product';

export const GET = async (request, { params }) => {
  try {
    await initMongoose();
    const ids = params.id.substr(0);
    const idsArray = ids.split(',');
    // console.log(idsArray)
    let products;
    if(ids){
       products = await ProductModel.find({
            _id : {$in:idsArray}
        }
          );
    }else{

         products = await ProductModel.find()
    }
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
