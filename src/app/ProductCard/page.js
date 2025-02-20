import Link from "next/link";
import Image from "next/image";
const categories = [
  {
    name: "Ceiling Fans AC",
    image: "/mainlogo.png", // Replace with your image path
    link: `/category/ceiling-fans-ac`, // Replace with your category link
  },
  {
    name: "Ceiling Fans DC",
    image: "/images/bracket_fan_icon.png", // Replace with your image path
    link: `/category/ceiling-fans-dc`, // Replace with your category link
  },
  {
    name: "Ceiling Fans AC-DC",
    image: "/images/mist_fan_icon.png", // Replace with your image path
    link: "/category/ceiling-fans-ac-dc", // Replace with your category link
  },
  {
    name: "Bracket Fans",
    image: "/images/mist_fan_icon.png", // Replace with your image path
    link: "/category/bracket-fans", // Replace with your category link
  },
  {
    name: "Pedestal Fans",
    image: "/images/mist_fan_icon.png", // Replace with your image path
    link: "/category/pedestal-fans", // Replace with your category link
  },
  {
    name: "Exhaust Fans",
    image: "/images/mist_fan_icon.png", // Replace with your image path
    link: "/category/Exhaust-fans", // Replace with your category link
  },
];
export default function ProductCard() {
  return (
    <div>
      <section>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Fan Categories</h1>{" "}
          {/* Optional heading */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <Link key={index} href={category.link} passHref>
                {/* Link wrapping the entire card */}
                <div className="border rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                  {/* Added hover effects for scale and shadow */}
                  <div className="relative h-32 w-32 mb-2">
                    {/* Added fixed dimensions for consistent image size */}
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
                  {/* Centered text */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
