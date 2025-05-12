import React, { useRef, useState, useEffect } from "react";
import {
  Smartphone,
  Map,
  Brain,
  Trophy,
  Star,
  Download,
  Cuboid as Android,
  Search,
  Book,
  TestTube,
} from "lucide-react";
import MockPhones from "./components/mockPhones";
import Navbar from "./components/Navbar";
import TopImage from "./components/TopImage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const section2Ref = useRef(null);
  const [inSection, setInSection] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInSection(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (section2Ref.current) {
      observer.observe(section2Ref.current);
    }

    return () => {
      if (section2Ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(section2Ref.current);
      }
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-white">
        <Navbar isInSection={inSection} />
        <TopImage />
        <Header />
        <MockPhones />
        {/* Features Section */}
        <section ref={section2Ref}>
          <div className="py-20 bg-white scroll-mt-20 mt-20" id="section2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Γιατί να επιλέξετε την εφαρμογή μας;
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <FeatureCard
                  icon={<Map className="w-8 h-8 text-blue-600" />}
                  title="Interactive Maps"
                  description="Μάζεψε νομίσματα απαντώντας σωστά και ξεκλείδωσε νέες κατηγορίες."
                />
                <FeatureCard
                  icon={<Brain className="w-8 h-8 text-blue-600" />}
                  title="Learn & Remember"
                  description="Αγόρασε βοήθειες και ζωές για να συνεχίσεις όταν δυσκολεύεσαι."
                />
                <FeatureCard
                  icon={<Trophy className="w-8 h-8 text-blue-600" />}
                  title="Track Progress"
                  description="Αντιμετώπισε αντιπάλους και δοκίμασε τις γνώσεις σου σε πραγματικό ανταγωνισμό για περισσότερα κέρδη."
                />
                <FeatureCard
                  icon={<Trophy className="w-8 h-8 text-blue-600" />}
                  title="Track Progress"
                  description="Επικοινώνησε εύκολα με τον δημιουργό της εφαρμογής και μοιράσου προτάσεις ή προβλήματα."
                />
              </div>
            </div>
          </div>
          {/* App Preview Section */}
          <div className="py-20 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1">
                  <h2 className="text-4xl font-bold text-gray-900 mb-16">
                    Το ταξίδι σου στην ελληνική γεωγραφία
                  </h2>
                  <div className="space-y-6">
                    <Feature
                      icon={<Star className="w-6 h-6 text-yellow-500" />}
                      title="Πολλαπλές Κατηγορίες"
                      description="From ancient cities to modern regions, test your knowledge across various topics."
                    />
                    <Feature
                      icon={<Book className="w-6 h-6 text-green-500" />}
                      title="Μάθηση και πρόκληση"
                      description="Learn anywhere, anytime - no internet connection required."
                    />
                    <Feature
                      icon={<Brain className="w-6 h-6 text-purple-500" />}
                      title="Δοκίμασε τις ικανότητές σου "
                      description="Intuitive design makes learning geography fun and engaging."
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80"
                    alt="Santorini view"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </section>
      </div>
    </>
  );
};

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-white rounded-lg shadow-md">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default App;
