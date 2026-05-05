import './App.css';

const menuData = [
  {
    category: "Starters",
    items: [
      { name: "Malai Paratha Roll", price: 400 },
      { name: "Bihari Paratha Roll", price: 380 },
      { name: "Kabab Paratha Roll", price: 380 },
      { name: "Dam Qeema Paratha Roll (Beef)", price: 400 },
    ]
  },
  {
    category: "Khowsay",
    items: [
      { name: "Vegetable Khowsay", price: 699 },
      { name: "Chicken Khowsay", price: 699 },
      { name: "Chicken Kabab Khowsay", price: 699 },
      { name: "Bihari Khowsay (Chicken)", price: 699 },
      { name: "Dami Khowsay (Beef)", price: 850 },
    ]
  },
  {
    category: "Coffee & Tea",
    items: [
      { name: "Hot Chocolate", price: 500 },
      { name: "Kashmiri Pink Tea", price: 500 },
      { name: "Green Tea", price: 400 },
      { name: "Choco Cloud", price: 699 },
      { name: "Cold Coffee", price: 600 },
      { name: "Mixed Tea", price: 300 },
      { name: "Coffee (Beaten)", price: 500 },
      { name: "Black Coffee", price: 350 },
    ]
  },
  {
    category: "Boba World",
    items: [
      { name: "Mango Boba Bliss (Iced Tea)", price: 600 },
      { name: "Peach Boba Bliss (Iced Tea)", price: 600 },
      { name: "Lemon Boba Bliss (Iced Tea)", price: 600 },
      { name: "Tea Pearl Bliss", price: 600 },
      { name: "Brew Pearl Latte", price: 800 },
    ]
  },
  {
    category: "Pakistani Cuisines",
    items: [
      { name: "Dam Ka Qeema (150gm Beef)", price: 1200 },
      { name: "Kabab Karahi", price: 650 },
    ]
  },
  {
    category: "Beverages",
    items: [
      { name: "Doodh Soda", price: 400 },
      { name: "Pakola Doodh Soda", price: 400 },
      { name: "Orange Doodh Soda", price: 400 },
      { name: "Simple Orange Soda", price: 300 },
      { name: "Simple Pakola Soda", price: 300 },
      { name: "Simple Lemon Soda", price: 300 },
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Soji Halwa (200gm)", price: 300 },
    ]
  },
  {
    category: "Sides & Add-ons",
    items: [
      { name: "Curry (Extra)", price: 100 },
      { name: "Secret Chutney (Extra)", price: 80 },
      { name: "Paratha (Frozen)", price: 130 },
      { name: "Zeera Raita", price: 60 },
    ]
  },
];

function App() {
  return (
    <div>
      <div className="hero">
        <div className="hero-bg" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1200)'}}></div>
        <div className="hero-content">
          <h1>BKK By Erum</h1>
          <p>Homemade Pakistani cuisine, delivered fresh</p>
          <a href="https://www.foodpanda.pk/restaurant/soln/bkk-by-erum" target="_blank" rel="noopener noreferrer" className="order-btn">
            Order Now on Foodpanda
          </a>
        </div>
      </div>

      <div className="menu-section">
        <h2>Our Menu</h2>
        {menuData.map((section) => (
          <div key={section.category} className="menu-category">
            <h3>{section.category}</h3>
            <div className="menu-items">
              {section.items.map((item) => (
                <div key={item.name} className="menu-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">Rs. {item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;