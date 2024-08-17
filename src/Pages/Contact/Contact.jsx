import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";
import { faEnvelope, faX } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer/Footer";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_u1sf8e9",
        "template_s0z1k4c",
        formData,
        "th-AL2lnwhfkPQdfn"
      )
      .then(
        (respone) => {
          console.log("SUCCESS !!", respone.status, respone.text);
          alert("SUCCESS!!", respone.status, respone.text);
        },
        (error) => {
          console.log("Failed", error);
          alert("failed", error);
        }
      );

    setFormData({ name: "", email: "", message: "" });
  };

  const handleSocialClick = (social) => {
    if (social === "linkedin") {
      window.open("https://www.linkedin.com/in/anurag-prajapati34/", "_blank");
    } else if (social === "email") {
      window.open("mailto:prajapatianurag73240@gmail.com", "_blank");
    } else if (social === "x") {
      window.open("https://x.com/anurag_x34", "_blank");
    } else if (social === "github") {
      window.open("https://github.com/anurag-prajapati34", "_blank");
    }
  };
 
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center relative">
      <NavBar />
      <div className="w-full max-w-[1440px] flex flex-col items-center mt-10 px-2 lg:px-[20px] mb-[50vh]">
        <div className="flex flex-col items-center">
          <h1 className="heading text-center justify-center">
            Let’s{" "}
            <b style={{ color: "#00897B" }} className="mx-2 ">
              #CONNECT
            </b>{" "}
            I’d Love to Hear From You
          </h1>
          <p className="w-[90%] sub-heading text-center mt-3">
            Whether you have questions, feedback, or just want to say hello,
            feel free to reach out. I'm excited to connect and collaborate with
            you!
          </p>
        </div>

        <div className="social-acounts-container flex gap-10 flex-wrap mt-[50px]">
          <div
            onClick={() => handleSocialClick("linkedin")}
            className="social-acount"
          >
            <div className="social-logo bg-blue-300">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <p className="social-name">LinkedIn</p>
          </div>

          <div
            onClick={() => {
              handleSocialClick("email");
            }}
            className="social-acount"
          >
            <div className="social-logo bg-red-300">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <p className="social-name">Email</p>
          </div>

          <div onClick={() => handleSocialClick("x")} className="social-acount">
            <div className="social-logo bg-slate-300">
              <FontAwesomeIcon icon={faX} />
            </div>
            <p className="social-name">X</p>
          </div>

          <div
            onClick={() => handleSocialClick("github")}
            className="social-acount"
          >
            <div className="social-logo bg-purple-300">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <p className="social-name">Github</p>
          </div>
        </div>

        <div className="mt-[50px]">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="flex flex-col text-start gap-2 mb-5">
              <label htmlFor="name">Name</label>

              <div className="input-container">
                {" "}
                <input
                  onChange={handleChange}
                  className="input-field name"
                  name="name"
                  id="name"
                  type="text"
                  value={formData.name}
                  required
                ></input>
              </div>
            </div>

            <div className="flex flex-col text-start gap-2 mb-5">
              <label htmlFor="email">Email</label>
              <div className="input-container">
                <input
                  onChange={handleChange}
                  className="input-field email"
                  name="email"
                  id="email"
                  type="email"
                  value={formData.email}
                  required
                ></input>
              </div>
            </div>
            <div className="flex flex-col text-start gap-2  mb-5">
              <label htmlFor="message">Message</label>
              <div className="input-container">
                <textarea
                  onChange={handleChange}
                  rows={4}
                  className="input-field message"
                  name="message"
                  id="message"
                  type="text"
                  value={formData.message}
                  required
                ></textarea>
              </div>
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
