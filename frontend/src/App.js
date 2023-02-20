import Banner from "./components/Banner/Banner";
import Cta from "./components/Cta/Cta";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Recommendation from "./components/Recommendation/Recommendation";
import Whattolearn from "./components/Whattolearn/Whattolearn";


function App() {
  return (
    <div className="">
      <Header />
      <main className="max-w-screen-2xl mx-auto items-start">
        {/* Banner */}
        <Banner
          title="Learning comes to you"
        />
        <section className="mt-2">
          <h2 className="text-4xl font-semibold py-8">What to learn next</h2>
          <Whattolearn />
        </section>
        <section className="mt-8">
          <Cta />
        </section>
        <section className="mt-2">
          <h2 className="text-4xl font-semibold py-8">Recommended for you</h2>
          <Recommendation />
        </section>
        <section className="mt-2">
          <h2 className="text-4xl font-semibold py-8">Recommended for you</h2>
          <Recommendation />
        </section>
        <section className="mt-2">
          <h2 className="text-4xl font-semibold py-8">Recommended for you</h2>
          <Recommendation />
        </section>
        <section className="mt-2">
          <h2 className="text-4xl font-semibold py-8">Recommended for you</h2>
          <Recommendation />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
