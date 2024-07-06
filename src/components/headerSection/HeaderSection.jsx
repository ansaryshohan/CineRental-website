import { useState } from "react";
import moon from "../../assets/icons/moon.svg";
import sun from "../../assets/icons/sun.svg";
import logo from "../../assets/logo.svg";
import ring from "../../assets/ring.svg";
import shoppingCart from "../../assets/shopping-cart.svg";
import useDarkModeContext from "../../hooks/useDarkModeContext";
import useMovieContext from "../../hooks/useMovieContext";
import ShoppingCart from "../shoppingCart/ShoppingCart";

const HeaderSection = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartMovieData } = useMovieContext();
  const { darkMode, setDarkMode } = useDarkModeContext();
  return (
    <header>
      {/*======= shopping cart show hide modal logic====== */}
      {showCart && <ShoppingCart onCartModalClose={() => setShowCart(false)} />}
      {/*========= navbar menu======= */}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode((prev) => !prev)}
            >
              {darkMode ? (
                <img src={sun} width="24" height="24" alt="moon" />
              ) : (
                <img src={moon} width="24" height="24" alt="moon" />
              )}
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setShowCart(true)}
            >
              <img src={shoppingCart} width="24" height="24" alt="cart" />
              {cartMovieData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {cartMovieData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderSection;
