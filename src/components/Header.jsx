import React from "react";
import {
  Smartphone,
  Map,
  Brain,
  Trophy,
  Star,
  Download,
  Apple,
  Cuboid as Android,
} from "lucide-react";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center scroll-mt-20 mt-5"
        id="section1"
      >
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white mb-2 lg:mb-4">
          Εξερεύνησε τη
        </h1>
        {/* <h1 className="text-4xl sm:text-4xl font-bold text-white mb-4 sm:mb-4">Κατέκτησε τη</h1> */}
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
          Γεωγραφία της Ελλάδας
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white mb-4 sm:mb-8 lg:mb-20">
          με Διασκεδαστικά Κουίζ
        </h1>
        <p className="text-md lg:text-2xl text-gray-200 pb-20 pt-10 max-w-2xl mx-auto">
          Μάθε για τα όμορφα νησιά, τις ιστορικές πόλεις, τα μεγαλοπρεπή βουνά
          και τα εντυπωσιακά τοπία. Ιδανικό για μαθητές, ταξιδιώτες και λάτρεις
          της Ελλάδας κάθε ηλικίας!
        </p>
        {/* <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            Download Now
          </button>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">
            Learn More
          </button>
        </div> */}

        <div id='#download-buttons' className="block sm:hidden text-[20px] text-gray-700 font-medium">
          Κατέβασε την εφαρμογή τώρα!
        </div>
        <div className="flex flex-row justify-center gap-4 mb-8 mt-10">
          {/* <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 mt-10"> */}
          <a
            // href="#"
            href="https://apps.apple.com/app/id6504780092"
            target="_blank"
            className="inline-flex items-center bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            <AiFillApple className="text-white mr-2" size={24} />
            {/* <Apple className="w-6 h-6 mr-2" /> */}
            <div className="hidden sm:block  mr-2">Κατέβασμα για </div>
            <div>iOS</div>
          </a>

          <a
            // href="#"
            href="https://play.google.com/store/apps/details?id=com.greekgeographyquizapp.dion"
            target="_blank"
            className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            <AiFillAndroid className="text-white mr-2" size={24} />
            {/* <Android className="w-6 h-6 mr-2" /> */}

            <div className="hidden sm:block  mr-2">Κατέβασμα για </div>
            <div>Android</div>
          </a>
        </div>

        <div>
          <img src="/GreekGeographySmartLink.png" alt="QR code" className="rounded-lg shadow-2xl w-1/3 md:w-1/5 lg:w-1/6 mx-auto mt-20" />
        </div>
        <div className="mb-30" />
        {/* <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">
          Learn More
        </button> */}
        <div className="mt-12">
          <img
            src="/meteora.jpg"
            // src="https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=2070&q=80"
            alt="Ancient Greek ruins"
            className="rounded-lg shadow-2xl w-full md:w-full lg:w-4/6 mx-auto"
            // className="rounded-lg shadow-2xl mx-auto max-w-4xl w-auto md:w-full"
          />
        </div>
      </div>
    </header>
  );
}
