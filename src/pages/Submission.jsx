import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import configs from "@/utils/configs";

function Submission() {
  const location = useLocation();
  const name = location.state?.name || "Anonymous";

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-grow flex-col items-center justify-center px-4 py-6 md:px-8">
        <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-md">
          {/* Success Icon */}
          <div className="mb-4 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lime-100 text-lime-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.372 0 0 5.373 0 12c0 6.628 5.372 12 12 12s12-5.372 12-12c0-6.627-5.373-12-12-12zm-1.5 18L6 12.59l1.42-1.42 3.08 3.08 7.08-7.08L19 8.59 10.5 18z" />
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-center text-2xl font-semibold text-lime-600">
            Form Submission Successful 🎉
          </h1>
          <p className="mt-2 text-center text-lg text-gray-800">
            {name}, your form has been successfully accepted.
          </p>

          {/* Action Link */}
          <p className="mt-4 text-center text-gray-600">
            You can view your submission by clicking
            <a
              href={configs.userResponseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transform rounded-full bg-gradient-to-r from-teal-400 to-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-300"
            >
              here
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Submission;
