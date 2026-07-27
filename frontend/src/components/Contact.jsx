import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate(); // ✅ Place it here

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-green-50 py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-10">

          <h1 className="text-4xl font-bold text-green-700 text-center">
            Contact Us
          </h1>

          <p className="text-center mt-5 text-gray-600">
            We'd love to hear from you. Feel free to contact us.
          </p>

          <div className="mt-10 space-y-6 text-lg">
            <div>
              <span className="font-bold text-green-600">📍 Address:</span>
              <p className="text-gray-700">
                FreshMart, Madurai, Tamil Nadu, India
              </p>
            </div>

            <div>
              <span className="font-bold text-green-600">📞 Phone:</span>
              <p className="text-gray-700">+91 98765 43210</p>
            </div>

            <div>
              <span className="font-bold text-green-600">📧 Email:</span>
              <p className="text-gray-700">support@freshmart.com</p>
            </div>

            <div>
              <span className="font-bold text-green-600">🕒 Working Hours:</span>
              <p className="text-gray-700">
                Monday - Saturday : 8:00 AM - 9:00 PM
              </p>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8">
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-300 hover:bg-gray-400 px-5 py-2 rounded-lg"
            >
              ← Back
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;