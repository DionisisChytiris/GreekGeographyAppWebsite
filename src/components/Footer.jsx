import React from "react";

export default function Footer() {
  return (
    <div  id="section3">

    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Έτοιμος να ξεκινήσεις το ταξίδι σου;
          </h3>
          <p className="text-gray-400 mb-8">
           Κατέβασε την εφαρμογή τώρα και άρχισε να εξερευνάς τη γεωγραφία της Ελλάδας!
          </p>
          <a href="#download-buttons">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Ξεκίνα
            </button>
          </a>
        </div>
      </div>
    </footer>
    </div>
  );
}
