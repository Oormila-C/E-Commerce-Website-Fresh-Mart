import apple from "../assets/apple.jpg";
import banana from "../assets/banana.jpg";
import milk from "../assets/milk.jpg";
import bread from "../assets/bread.jpg";
import carrot from "../assets/carrot.jpg";
import juice from "../assets/juice.jpg";

const products = [
  {
    id: 1,
    name: "Apple",
    category: "Fruits",
    price: 3.99,
    image: apple,
  },
  {
    id: 2,
    name: "Banana",
    category: "Fruits",
    price: 2.49,
    image: banana,
  },
  {
    id: 3,
    name: "Milk",
    category: "Dairy",
    price: 4.99,
    image: milk,
  },
  {
    id: 4,
    name: "Bread",
    category: "Bakery",
    price: 2.99,
    image: bread,
  },
  {
    id: 5,
    name: "Carrot",
    category: "Vegetables",
    price: 1.99,
    image: carrot,
  },
  {
    id: 6,
    name: "Orange Juice",
    category: "Beverages",
    price: 5.49,
    image: juice,
  },
];

export default products;