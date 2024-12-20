import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";

function Home() {
  const location = useLocation();
  const badWord = location.state?.badWord || "Bad Word";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 py-6 md:px-8">
      <Header />
      <main className="w-full max-w-lg rounded-lg bg-white p-6 text-center shadow-lg">
        <h1 className="mb-4 text-2xl font-semibold text-red-500">
          Form Submission Failed 📛
        </h1>
        <p className="text-lg text-gray-700">
          Your form submission was flagged due to:{" "}
          <span className="font-bold text-red-600">{badWord}</span>
          <p className="my-3 text-gray-600">
            Please review your information and try again.
          </p>
          <Link
            className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition duration-200 hover:bg-blue-700"
            to="/"
          >
            Go Back to Form
          </Link>
        </p>
      </main>
    </div>
  );
}

export default Home;
