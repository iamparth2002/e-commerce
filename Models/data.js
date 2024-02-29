const mongoose = require('mongoose')
const ProductModal = require('./Product')

const products = [
  {
    name: 'Apple Airpods 2',
    description: ' Wireless earbuds with improved connectivity, longer battery life, and hands-free Siri integration',
    price: 599,
    category: 'audio',
    picture: 'https://i.postimg.cc/jSVt58mV/airpods.png',
  },
  {
    name: 'Samsung Buds 2',
    description: 'True wireless earbuds offering enhanced sound quality, active noise cancellation, and seamless integration with Samsung devices',
    price: 499,
    category: 'audio',
    picture: 'https://i.postimg.cc/vBdszX5R/freebuds.png',
  },
  {
    name: 'Sony MX 3',
    description: 'Premium wireless headphones featuring industry-leading noise cancellation, exceptional sound quality, and long-lasting battery life.',
    price: 499,
    category: 'audio',
    picture: 'https://i.postimg.cc/Kzb6Ljyx/headset.png',
  },
  {
    name: 'Iphone 14 Pro',
    description: 'Flagship smartphone with advanced camera capabilities, powerful performance, and stunning design.',
    price: 999,
    category: 'mobiles',
    picture: 'https://i.postimg.cc/MG1kvRN9/iphone.png',
  },
  {
    name: 'Samsung Galaxy S22',
    description: 'High-end smartphone boasting cutting-edge features, top-tier performance, and sleek design.',
    price: 899,
    category: 'mobiles',
    picture: 'https://i.postimg.cc/MHPNhYfp/galaxy.png',
  },
  {
    name: 'Redmi Note 10',
    description: 'Budget-friendly smartphone offering impressive display, versatile camera system, and solid performance',
    price: 799,
    category: 'mobiles',
    picture: 'https://i.postimg.cc/0yTRkZW6/redmi.png',
  },
  {
    name: 'Apple Macbook Pro',
    description: 'Powerful laptop featuring stunning Retina display, blazing-fast performance, and innovative Touch Bar functionality',
    price: 1799,
    category: 'laptops',
    picture: 'https://i.postimg.cc/pVCHffT7/macbook.png',
  },
  {
    name: 'MSI katana G59',
    description: 'Gaming laptop equipped with high-performance components, immersive display, and sleek design for intense gaming experiences',
    price: 1199,
    category: 'laptops',
    picture: 'https://i.postimg.cc/651xSBCf/msi.png',
  },
  {
    name: 'Asus Rog 15',
    description: 'Gaming laptop engineered for peak performance, featuring high-refresh-rate display, advanced cooling system, and customizable RGB lighting',
    price: 1399,
    category: 'laptops',
    picture: 'https://i.postimg.cc/ncr6qNNj/rog.png',
  },
];

mongoose
  .connect(
    'mongodb+srv://iamparth2002:iamparth2002@cluster0.fdcgy8l.mongodb.net/ecommerce?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('DB Connected!');
  });

  const trialOne = () =>{
    products.map(async(item)=>{
      const userDoc = await ProductModal.create({
          ...item  
        });
      if(userDoc){
          console.log("done")
      }
    })
  }

  trialOne()