import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { Provider } from "../context/authContext.js";
import Footer from "../components/common/footer";
import Navbar from "../components/common/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
