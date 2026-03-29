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
  if (itemName && price) {
    return `https://wa.me/923345892999?text=Hi%20NF%20Pizza,%20I%20would%20like%20to%20order%20${itemName.replace(/ /g, '%20')}%20for%20${price.replace(/ /g, '%20')}.`;
  }
  return "https://wa.me/923345892999?text=Hi%20NF%20Pizza,%20I%20would%20like%20to%20place%20an%20order.";
};
