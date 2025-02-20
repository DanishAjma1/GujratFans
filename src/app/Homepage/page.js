import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "INNOVATION",
    description: "Our company is always on the lookout for new technology",
  },
  {
    title: "QUALITY PRODUCTS",
    description:
      "We satisfy our customers through our supreme quality products",
  },
  {
    title: "VARIETY",
    description:
      "Gujrat Fans offers the largest variety of customizable products.",
  },
];
const products = [
  {
    name: 'DC PEDESTAL (20")',
    image: "/images/dc_pedestal_fan.jpg",
    price: "PKR 7,725",
    link: "/product/dc-pedestal",
  },
  {
    name: "GF-7025EL ELECTRIC GEYSER",
    image: "/images/electric_geyser.jpg",
    price: "PKR 24,000",
    link: "/product/electric-geyser",
  },
  {
    name: "PERFECT PLUS",
    image: "/images/perfect_plus_fan.jpg",
    price: "PKR 10,895",
    link: "/product/perfect-plus-fan",
  },
  {
    name: "SAPPHIRE PLUS",
    image: "/images/sapphire_plus_fan.jpg",
    price: "PKR 10,575",
    link: "/product/sapphire-plus-fan",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="bg-gray-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-serif">
              Welcome to Gujrat Fans
            </h1>
            <div className="w-2/3 align-center mx-auto">
              <p className="text-xl sm:text-2xl font-mono">
                Pakistan Fan Manufacturer Since 1985
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 underline hover:text-blue-800">
              About Gujrat Fans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-3 mt-10">
              <div className="prose max-w-none">
                <p className="text-lg mt-5 font-thin">
                  Established in 1985, Gujrat Fans has been a pioneer in air
                  circulation solutions for both residential and industrial
                  applications...
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    ISO 9001 Certified Manufacturing
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <section>
            <div className="flex flex-wrap justify-center gap-6 p-10 mt-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-800 text-white p-6 rounded-lg w-full sm:w-80 text-center shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/mainlogo.png"
                      alt="GFC Logo"
                      width={130}
                      height={80}
                    />
                  </div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm mt-2">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        </section>

        <section className="py-12">
          <div className="container mx-auto p-4">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4 align-center underline hover:text-blue-800">
                Our Top Products
              </h1>
              <p className="text-lg mb-5 font-thin">
                There are many variations of that are top of our brand.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="border rounded-lg shadow-md p-4 relative hover:scale-105 transform transition duration-300 ease-in-out"
                >
                  <Link href={product.link} passHref>
                    <div className="relative h-48 mb-4 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-t-lg cursor-pointer"
                      />
                    </div>
                  </Link>
                  <h2 className="text-lg font-medium mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-4">{product.price}</p>
                  <Link href={product.link} passHref>
                    <button className="bg-gray-800 hover:bg-transparent hover:text-black text-white font-bold py-2 px-4 rounded">
                      BUY NOW
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
