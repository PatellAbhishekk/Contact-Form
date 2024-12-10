import Header from "@/components/Header";
import Aside from "@/components/Aside";
import Form from "@/components/Form";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-400 px-4 py-3 md:px-8">
      <Header />
      <main className="grid grid-cols-8 bg-red-100">
        <div className="col-span-2 hidden rounded-lg bg-green-300 md:block">
          <Aside />
        </div>
        <div className="col-span-full rounded-lg bg-blue-300 p-5 md:col-span-6">
          <Form />
        </div>
      </main>
    </div>
  );
}

export default Home;