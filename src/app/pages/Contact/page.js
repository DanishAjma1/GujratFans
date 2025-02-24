import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-300 min-h-screen flex flex-col items-center py-12 md:p-12">
      <section className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl mx-auto text-center transform transition-all duration-500 hover:shadow-3xl">
        {/* Title Section */}
        <h1 className="text-5xl font-extrabold text-gray-800 tracking-wide">
          📞 Let's Connect!
        </h1>
        <p className="text-lg text-gray-600 font-medium">
          Have questions about our fan products? Contact us on WhatsApp for
          instant assistance!
        </p>

        {/* WhatsApp Contact Button */}
        <div className="flex justify-center mt-6">
          <Link href="https://wa.me/923226409363" target="_blank" passHref>
            <div className="flex items-center justify-center bg-green-500 text-white text-lg font-semibold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-xl">
              <span className="mr-2 text-2xl">💬</span> Chat with Us on WhatsApp
            </div>
          </Link>
        </div>

        {/* Office Details */}
        <div className="mt-6 text-gray-700 bg-gray-100 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">🏢 Our Office</h2>
          <p className="text-lg">
            Grand Trunk Road, Kalra Khasa, Gujart, Pakistan
          </p>
          <p className="text-lg">📧 Email: contact@fancompany.com</p>
        </div>

        {/* Google Map Embed */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800">📍 Our Location</h2>
          <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg border-4 border-blue-400">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26592.80380367462!2d74.0635984880308!3d32.57309792797805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f1e3f4e3a9ad3%3A0xe3d5b2d6c92d1fcb!2sKalra%20Khasa%2C%20Gujrat%2C%20Pakistan!5e0!3m2!1sen!2s!4v1697999999999"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-0 transition-all duration-300"></div>
          </div>

          {/* Direct Google Maps Link */}
          <div className="text-center mt-4">
            <Link
              href="https://maps.app.goo.gl/qN547issHjfgadWZ7"
              target="_blank"
              className="text-blue-700 text-lg font-semibold hover:underline transition duration-300"
            >
              🌍 View on Google Maps
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
