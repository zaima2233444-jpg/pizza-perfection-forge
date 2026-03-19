import foodGyro from "@/assets/food-gyro.jpg";
import foodZinger from "@/assets/food-zinger.jpg";

export interface MenuItem {
  slug: string;
  name: string;
  price: string;
  priceNum: number;
  desc: string;
  img: string;
}

export const menuItems: MenuItem[] = [
  { slug: "crispy-gyro", name: "Crispy Gyro", price: "PKR 250", priceNum: 250, desc: "Savory, seasoned meat wrapped in warm pita with fresh vegetables and creamy sauce.", img: foodGyro },
  { slug: "gyro", name: "Gyro", price: "PKR 250", priceNum: 250, desc: "A flavorful wrap filled with seasoned meat, fresh vegetables, and tangy sauce.", img: foodGyro },
  { slug: "zinger-burger", name: "Zinger Burger", price: "PKR 300", priceNum: 300, desc: "Crispy chicken fillet sandwich with spicy sauce, lettuce, and a soft bun.", img: foodZinger },
  { slug: "zinger-burger-with-cheese", name: "Zinger Burger With Cheese", price: "PKR 350", priceNum: 350, desc: "Crispy chicken patty, melted cheese, fresh lettuce, and spicy sauce.", img: foodZinger },
];

export const getWhatsAppLink = (itemName?: string, price?: string) => {
  const message = itemName && price
    ? `Hi NF Pizza, I would like to order ${itemName} for ${price}.`
    : "Hi, I would like to place an order";
  return `https://wa.me/923345892999?text=${encodeURIComponent(message)}`;
};
