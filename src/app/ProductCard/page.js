import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Ceiling Fans AC",
    image: "/Images/ceiling-fan-ac.png",
    link: "/category/ceiling-fans-ac",
  },
  {
    name: "Ceiling Fans DC",
    image: "/Images/ceiling-fan-dc.png",
    link: "/category/ceiling-fans-dc",
  },
  {
    name: "Ceiling Fans AC-DC",
    image: "/Images/ceiling-fan-ac-dc.png",
    link: "/category/ceiling-fans-ac-dc",
  },
  {
    name: "Bracket Fans",
    image: "/Images/bracket_fan.png",
    link: "/category/bracket-fans",
  },
  {
    name: "Pedestal Fans",
    image: "/Images/pedestal_fan.png",
    link: "/category/pedestal-fans",
  },
  {
    name: "Exhaust Fans",
    image: "/Images/exhaust_fan.png",
    link: "/category/exhaust-fans",
  },
];

export default function ProductCard() {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-300 min-h-screen py-8">
      <section>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-6 text-center text-white">
            Our Product Categories
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={category.link} passHref>
                <div className="border  bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center cursor-pointer transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-red-900">
                  <div className="relative h-36 w-36 mb-4">
                    <Image
                      src={category.image}
                      alt={category.name}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800 text-center">
                    {category.name}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
