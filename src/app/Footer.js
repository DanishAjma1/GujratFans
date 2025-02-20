import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Gujarat Fans</h3>
            <p className="text-gray-400">Quality fans since 1985</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href={"/category/ceiling-fans-ac"}>Ceiling Fans AC</Link>
              </li>
              <li>
                <Link href={"/category/ceiling-fans-dc"}>Ceiling Fans DC</Link>
              </li>
              <li>
                <Link href={"/category/ceiling-fans-ac-dc"}>
                  Ceiling Fans AC-DC
                </Link>
              </li>
              <li>
                <Link href={"/category/bracket-fans"}>Bracket Fans</Link>
              </li>
              <li>
                <Link href={"/category/pedestal-fans"}>Pedestal Fans</Link>
              </li>
              <li>
                <Link href={"/category/exhaust-fans"}>Exhaust Fans</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href={"/About"}>About Us</Link>
              </li>
              <li>
                <Link href={"/Contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">
              Plot No. 12, Industrial Area
              <br />
              Gujrat - 40700
              <br />
              Phone: +91 98765 43210
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>&copy; 2023 Gujarat Fans. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
