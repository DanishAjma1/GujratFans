import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <section className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Get in Touch with Us
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Have any questions about our fan products? Reach out to us via
          WhatsApp for quick assistance!
        </p>

        <div className="flex justify-center">
          <Link href="https://wa.me/923226409363" target="_blank" passHref>
            <div className="flex items-center justify-center bg-green-500 text-white text-lg font-medium py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="mr-3">📱</span>Contact Us on WhatsApp
            </div>
          </Link>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Our Office
          </h2>
          <p className="text-gray-600">123 Fan St, Fan City, Fan Country</p>
          <p className="text-gray-600">Email: contact@fancompany.com</p>
        </div>
      </section>
    </div>
  );
}
