import Link from "next/link";
import Image from "next/image";
const categories = [
  {
    name: "Ceiling Fans AC",
    image: "/Icons/mainlogo.png",
    link: `/category/ceiling-fans-ac`,
  },
  {
    name: "Ceiling Fans DC",
    image: "/images/bracket_fan_icon.png",
    link: `/category/ceiling-fans-dc`,
  },
  {
    name: "Ceiling Fans AC-DC",
    image: "/images/mist_fan_icon.png",
    link: "/category/ceiling-fans-ac-dc",
  },
  {
    name: "Bracket Fans",
    image: "/images/mist_fan_icon.png",
    link: "/category/bracket-fans",
  },
  {
    name: "Pedestal Fans",
    image: "/images/mist_fan_icon.png",
    link: "/category/pedestal-fans",
  },
  {
    name: "Exhaust Fans",
    image: "/images/mist_fan_icon.png",
    link: "/category/exhaust-fans",
  },
];
export default function ProductCard() {
  return (
    <div>
      <section>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Fan Categories</h1>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <Link key={index} href={category.link} passHref>
                <div className="border rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                  <div className="relative h-32 w-32 mb-2">
                    <Image
                      src={category.image}
                      alt={category.name}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <h2 className="text-lg font-medium text-center">
                    {category.name}
                  </h2>{" "}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
