import React from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ga6mkp",
        "template_3ny1vf9",
        e.target,
        "user_AcVY4pIVcM3WPeWASPt4q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Você acaba de se increver em nossa newsletter!");
  }

  return (
    <>
      <div className="min-h-screen w-1/3 mx-20 py-2 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-gray-800 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold text-blue-600">
                  Quero receber as melhores ofertas!
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-blue-600 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      type="text"
                      name="user_name"
                      className="peer placeholder-transparent h-10 w-full border-b-2 bg-gray-800 border-gray-600 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Nome completo"
                    />
                    <label className="absolute left-0 -top-3.5 text-blue-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Nome
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      name="user_email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 bg-gray-800 border-gray-600 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Seu e-mail"
                    />
                    <label className="absolute left-0 -top-3.5 text-blue-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      E-mail
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      className="bg-blue-600 hover:bg-blue-400 text-white rounded-md px-2 py-1"
                      onClick={sendEmail}
                    >
                      Inscrever-se
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
