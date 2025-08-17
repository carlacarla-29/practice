import React from 'react';
import '../styles/app.css';
const ProductCard = ({ image, name, price, description }) => {
  const handleBuyNow = () => {
    console.log(`Buy Now clicked for: ${name}`);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-content">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price}</p>
        <p className="product-description">{description}</p>
        <button className="buy-now-btn" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

const rapadatest  = () => {
  const products = [
    {
      id: 1,
      image: "https://i2.wp.com/pbfingers.com/wp-content/uploads/2022/06/oreo-cheesecake-ice-cream-9-683x1024.jpg",
      name: "Oreo Cheesecake Ice Cream",
      price: "₱99.99",
      description: "A perfectly rich and creamy vanilla cheesecake ice cream base is absolutely jam-packed with Oreos in this Cheesecake Cookies ‘n’ Cream Ice Cream "
    },
    {
      id: 2,
      image: "https://thumbs.dreamstime.com/z/matcha-green-tea-ice-cream-cone-melting-studio-shot-background-food-photography-summer-dessert-concept-332020126.jpg?ct=jpeg",
      name: "Matcha Ice Cream",
      price: "₱249.99",
      description: "A luxuriously creamy matcha ice cream base is infused with authentic Japanese green tea, delivering a perfectly earthy-sweet balance in every refreshing scoop"
    },
    {
      id: 3,
      image: "https://pinoybites.com/wp-content/uploads/2020/05/Snapseed-35-scaled-1152x1536.jpg.webp",
      name: "Ube Ice Cream",
      price: "₱89.99",
      description: "A rich and velvety ube ice cream base swirled with the nutty-sweet flavor of purple yam, creating a perfectly creamy and vibrant treat in every scoop."
    },
    {
      id: 4,
      image: "https://skinnyms.com/wp-content/uploads/2014/07/Frozen-Yogurt-with-Fresh-Fruit-Salad-Mint.jpg",
      name: "Fruit Salad Ice Cream",
      price: "₱129.99",
      description: "A creamy fruit salad ice cream base is bursting with tropical flavors, packed with sweet pineapple, juicy peaches, cherries, and more for a refreshing scoop of fruity goodness."
    },
    {
      id: 5,
      image: "https://joyfoodsunshine.com/wp-content/uploads/2020/06/homemade-chocolate-ice-cream-recipe-5.jpg",
      name: "Chocolate Ice Cream",
      price: "₱119.99",
      description: "A decadently rich and creamy chocolate ice cream base made with premium cocoa, delivering a smooth, indulgent scoop that melts in your mouth."
    },
    {
      id: 6,
      image: "https://www.recipetineats.com/tachyon/2018/07/Strawberry-Ice-Cream-No-Churn_3b.jpg?resize=900%2C1260&zoom=0.72",
      name: "Strawberry Ice Cream",
      price: "₱59.99",
      description: "A lusciously creamy strawberry ice cream base is blended with ripe, juicy strawberries for a sweet, refreshing scoop bursting with fruity flavor."
    }
  ];

  return (
    <div className="rapada-test">
      <header className="app-header">
        <h1>🍦Ice Cream camito😋</h1>
        <p>Discover amazing Ice cream at great prices and also yummy</p>
      </header>
      
      <div className="products-grid">
        
        {products.map((product) => (
          <ProductCard
            key={product.id}  
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default rapadatest;
