import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-8 mt-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Gujarat Fans</h3>
            <p className="text-blue-100">Quality fans since 1985</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-blue-100 ">
              <li >
                <Link href={"/pages/category/ceiling-fans-ac"} className="hover:text-blue-300">Ceiling Fans AC</Link>
              </li>
              <li>
                <Link href={"/pages/category/ceiling-fans-dc"} className="hover:text-blue-300" >Ceiling Fans DC</Link>
              </li>
              <li>
                <Link href={"/pages/category/ceiling-fans-ac-dc"} className="hover:text-blue-300">
                  Ceiling Fans AC-DC
                </Link>
              </li>
              <li>
                <Link href={"/pages/category/bracket-fans"} className="hover:text-blue-300">Bracket Fans</Link>
              </li>
              <li>
                <Link href={"/pages/category/pedestal-fans"} className="hover:text-blue-300">Pedestal Fans</Link>
              </li>
              <li>
                <Link href={"/pages/category/exhaust-fans"} className="hover:text-blue-300">Exhaust Fans</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link href={"/pages/about"} className="hover:text-blue-300">About Us</Link>
              </li>
              <li>
                <Link href={"/pages/contact"} className="hover:text-blue-300">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-blue-100">
              Grand Trunk Road, Kalra Khasa,
              <br />
              Gujart - 50700
              <br />
              Tel: 053-3707581
              <br />
              Phone: 0333-8407126
            </p>
          </div>
        </div>
        <div className="border-t border-blue-500 mt-8 pt-4 text-center text-blue-300">
          <p>&copy; 2023 Gujarat Fans. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
