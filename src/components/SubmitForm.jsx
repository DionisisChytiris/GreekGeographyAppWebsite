import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SubmitForm() {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //   const [submittedName, setSubmittedName] = useState("");
  const [warning, setWarning] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setSubmittedName(name);

    if (!name.trim()) {
      alert("Please insert you name!");
      nameInputRef.current?.focus();
      return;
    }

    if (!email.trim() && !email.includes("@")) {
      alert("Please insert you email!");
      emailInputRef.current?.focus();
      return;
    }
    if (!message.trim()) {
      alert("Please insert you message!");
      messageInputRef.current?.focus();
      return;
    }

    // const client_id = await AsyncStorage.getItem("analytics_client_id");
    // const randomPart = Math.random().toString(36).substring(2, 8); // 6-char string
    // const client_id = `Portofolio Website - ${randomPart}`;
    const client_id = Math.random().toString(36).substring(2, 8); // 6-char string
    // if (!client_id) {
    //   alert("Client ID is required. Please try again.");
    //   return;
    // }

    try {
      const response = await fetch(
        "https://greek-geography-quiz-app-backend.vercel.app/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            app_id: "greek-geography-website",
            client_id,
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // setRefresh((prev) => !prev);
        // alert("Το μήνυμά σας στάλθηκε με επιτυχία!");
        toast.success("Your message has been sent!");
        setMessage("");
        setName("");
        setEmail("");
        setWarning("");
      } else {
        alert.alert("Error", data.error || "Η αποστολή του μηνύματος απέτυχε.");
      }
    } catch {
      alert("Η αποστολή του μηνύματος απέτυχε.");
    }
  };

  const handleNameChange = (text) => {
    // Allow letters, numbers, spaces, and emojis. Block other symbols.
    const filtered = text.replace(/[^\p{L}\p{N}\p{Emoji}\s]/gu, "");
    if (filtered !== text) {
      setWarning("Only letters, numbers, spaces, and emojis are allowed.");
    } else {
      setWarning(""); // Clear warning if input is valid
    }
    setName(filtered);
  };
  const handleEmailChange = (text) => {
    // Allow letters, numbers, spaces, emojis, and common email symbols
    const filtered = text.replace(/[^\p{L}\p{N}\p{Emoji}\s@._\-+]/gu, "");
    if (filtered !== text) {
      setWarning(
        "Only letters, numbers, spaces, @, _, + and emojis are allowed."
      );
    } else {
      setWarning(""); // Clear warning if input is valid
    }
    setEmail(filtered);
  };
  const handleMessageChange = (text) => {
    // Allow letters, numbers, spaces, and emojis. Block other symbols.
    const filtered = text.replace(/[^\p{L}\p{N}\p{Emoji}\s.,!]/gu, "");
    if (filtered !== text) {
      setWarning("Only letters, numbers, spaces, and emojis are allowed.");
    } else {
      setWarning(""); // Clear warning if input is valid
    }
    setMessage(filtered);
  };

  return (
    <div>
      <div className="relative">
        {warning && (
          <div className="absolute bg-blue-500 text-white px-2 py-1 rounded text-sm">
            {warning}
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="contact-form ">
        <div className="form-group">
          <input
            ref={nameInputRef}
            type="text"
            placeholder="Εισάγεται το όνομά σας *"
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200  hover:border-blue-400 hover:bg-gray-50 
             dark:hover:bg-blue-100"
          />
        </div>
        <div className="form-group">
          <input
            ref={emailInputRef}
            type="email"
            placeholder="Εισάγεται το email σας*"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200  hover:border-blue-400 hover:bg-gray-50 
             dark:hover:bg-blue-100"
          />
        </div>
        <div className="text-[1.1rem] lg:text-[1.3rem] text-[#6c757d] dark:text-gray-300 mb-16 leading-[1.6] max-w-[800px]"></div>
        {/* <div className="form-group">
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-300"
          />
        </div> */}
        <div className="form-group">
          <textarea
            ref={messageInputRef}
            placeholder="Γράψτε το μήνυμά σας *"
            value={message}
            onChange={(e) => handleMessageChange(e.target.value)}
            className="w-full h-40 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200  hover:border-blue-400 hover:bg-gray-50 
             dark:hover:bg-blue-100"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          <span>Αποστολή</span>
        </button>
      </form>
      {/* <div className="text-white">{submittedName}</div> */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default SubmitForm;
