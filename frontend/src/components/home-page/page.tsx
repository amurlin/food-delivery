// import { useState, useEffect } from "react";

// interface MenuItem {
//   name: string;
//   price: number;
//   image: string;
// }

// const Home = () => {
//   const [menu, setMenu] = useState<MenuItem[]>([]);

//   useEffect(() => {
//     const fetchMenu = async () => {
//       const res = await fetch("http://localhost:8000/food");
//       const data = await res.json();
//       setMenu(data);
//     };
//     fetchMenu();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold">Menu</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {menu.map((item, index) => (
//           <div key={index} className="border p-4 rounded shadow">
//             <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded" />
//             <h2 className="text-xl font-semibold">{item.name}</h2>
//             <p className="text-lg">{item.price}₮</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
