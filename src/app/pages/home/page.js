import Image from "next/image";
import Link from "next/link";

const features = [
  {
    image: "/Icons/idea_7636263.png",
    title: "INNOVATION",
    description: "Our company is always on the lookout for new technology",
  },
  {
    image: "/Icons/quality_10991786.png",
    title: "QUALITY PRODUCTS",
    description:
      "We satisfy our customers through our supreme quality products",
  },
  {
    image: "/Icons/hand_16288493.png",
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
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 text-center shadow-lg">
          <div className="flex flex-col items-center">
            <Image
              alt="Gujrat Fans Logo"
              height={310}
              width={335}
              src="/Icons/mainlogo.png"
              className="mb-4"
            />
            <h1 className="text-5xl font-extrabold font-serif">
              Welcome to Gujrat Fans
            </h1>
            <p className="text-xl font-mono mt-3">
              Pakistan Fan Manufacturer Since 1985
            </p>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 ">
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
        </section>

        <section className="py-16  bg-gradient-to-r from-blue-700 to-blue-900 ">
          <div className="container mx-auto px-6 text-center ">
            <h2 className="text-3xl font-bold text-white mb-8">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                  <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
                  <p className="text-gray-600 mt-2">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto p-4">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4 align-center">
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
                    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition duration-300">
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
