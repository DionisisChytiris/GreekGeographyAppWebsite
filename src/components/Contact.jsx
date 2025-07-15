import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import SubmitForm from "./SubmitForm";

function Contact() {
  return (
    <div>
      <section id="section3" className="relative px-[5%] py-20">
        <div className="absolute top-0 left-0 w-full h-[100px] bg-[#9cb8db] [clip-path:polygon(0_0,100%_0,100%_30%,0_50%)] md:[clip-path:polygon(0_0,100%_0,100%_50%,0_100%)] z-1"></div>
        <div>
          <h2 className="text-[1.6rem] md:text-[2rem] lg:text-[2.2rem] text-[#495057] mt-0 md:mt-8 mb-4 font-semibold">
            Επικοινωνήστε Μαζί Μας
          </h2>

          <p className="text-[1rem] lg:text-[1.1rem] text-gray-800 mb-12 leading-[1.6] max-w-[800px]">
            Ας συζητήσουμε για το επόμενο σου project
          </p>
        </div>
        <div className="flex flex-wrap justify-between mt-8">
          <div className="flex-[0_0_45%] min-w-[300px] mb-8">
            <h3 className="text-[1.55rem] md:text-[1.75rem] font-bold text-[#212529] mb-6 leading-[1.4]">
              Ας συνεργαστούμε στο επόμενο σου project.
            </h3>
            <p className="text-[1.1rem] md:text-[1.2rem] text-[#495057]  mb-6 leading-[1.5] md:leading-[1.6]">
              Αυτή την περίοδο είμαι διαθέσιμος για freelance δουλειές και πλήρη
              απασχόληση. Αν έχεις κάποιο project που χρειάζεται δημιουργικό
              προγραμματισμό, μη διστάσεις να επικοινωνήσεις!
            </p>

            <div className="mb-[2rem]">
              <div className="flex items-center mb-5">
                <MdEmail className="text-xl mr-4 text-gray-800" />
                <span className="text-[1rem] md:text-[1.2rem] text-[#495057] ">
                  diochy7tech@outlook.com
                </span>
              </div>
              <div className="flex items-center mb-5">
                <MdPhone className="text-xl mr-4 text-gray-800" />
                <span className="text-[1rem] md:text-[1.2rem] text-[#495057] ">
                  +44 7518935448
                </span>
              </div>
              <div className="flex items-center mb-5">
                <MdLocationOn className="text-xl mr-4 text-gray-800" />
                <span className="text-[1rem] md:text-[1.2rem] text-[#495057] ">
                  Λονδίνο, Ηνωμένο Βασίλειο
                </span>
              </div>
              {/* <div className="text-white">{submittedName}</div> */}
            </div>

            {/* <SocialMediaBtns/> */}
          </div>
          {/* Contact Form */}
          <div className="basis-[45%] min-w-full md:min-w-[300px] mt-12 md:-mt-28">
            <SubmitForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
