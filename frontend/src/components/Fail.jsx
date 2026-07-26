import { useNavigate } from "react-router-dom";
function Fail() {
  const Navigate=useNavigate()
  function tryagain(){
      Navigate("/")
  }
  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-center border border-red-200">

        <div className="text-6xl mb-4">❌</div>

        <h1 className="text-3xl font-bold text-red-600">
          Login Failed
        </h1>

        <p className="text-gray-600 mt-4">
          Invalid username or password.
        </p>

        <p className="text-gray-500 mt-2">
          Please check your login details and try again.
        </p>

        <button onClick={tryagain} className="mt-8 w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition">
          Try Again
        </button>

      </div>
    </div>
  );
}

export default Fail;