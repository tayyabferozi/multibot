import Header from "./components/layout/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="">
      <img
        src="/assets/noise.png"
        className="fixed mix-blend-soft-light opacity-50 w-full h-full object-cover"
        alt="noise"
      />
      <img
        src="/assets/bg-home-hero.png"
        alt="spots"
        className="absolute top-0 left-0"
      />
      <div className="relative">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
