import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/actions";
import { generatePublicUrl } from "../../../urlConfig";
import router from "next/router";
const Navigation = ({ query }) => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [categoryBanner, setCategoryBanner] = useState("");

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
      <ul>
        <li>
          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link
            href="/shop?path=eyewear"
            as={process.env.PUBLIC_URL + "/shop/eyewear"}
          >
            <a>Eyewear</a>
          </Link>
          <IoIosArrowDown />

          <ul className="sub-menu sub-menu--mega sub-menu--mega--column-4">
            <li className="sub-menu--mega__title">
              {/* <Link
                href="/shop/left-sidebar"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a>Eyewear</a>
              </Link> */}
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/shop?path=mens-sunglasses"
                    as={process.env.PUBLIC_URL + "/shop/mens-sunglasses"}
                  >
                    <a>Mens Sunglasses</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop?path=womens-sunglasses"
                    as={process.env.PUBLIC_URL + "/shop/womens-sunglasses"}
                  >
                    <a>Womens Sunglasses</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop?path=mens-glasses"
                    as={process.env.PUBLIC_URL + "/shop/mens-glasses"}
                  >
                    <a>Mens Glasses</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop?path=womens-glasses"
                    as={process.env.PUBLIC_URL + "/shop/womens-glasses"}
                  >
                    <a>Womens Glasses</a>
                  </Link>
                </li>
              </ul>
            </li>
            {/* <li className="sub-menu--mega__title">
              <Link
                href="/shop/left-sidebar"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a>Eyewear</a>
              </Link>
              <ul className="sub-menu--mega__list">

                <li>
                  <Link
                   href="/shop?path=sunglasses"
                as={process.env.PUBLIC_URL + "/shop/sunglasses"}
                  >
                    <a>Sunglasses</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a>Glasses</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Link
                href="/shop/left-sidebar"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a>Bracelets</a>
              </Link>
            </li> */}
            <li>
              <div className="sub-menu--mega__image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/menu-image/eyewear.jpg"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </li>

        <li>
        <Link
            href="/shop?path=watches"
            as={process.env.PUBLIC_URL + "/shop/watches"}
          >
            <a>Watches</a>
          </Link>
          <IoIosArrowDown />

          <ul className="sub-menu sub-menu--mega sub-menu--mega--column-4">
            <li className="sub-menu--mega__title">
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/shop/no-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/no-sidebar"}
                  >
                    <a>Mens Watches</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a>Womens Watches</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a>Smartwatches</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a>Bracelets</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <div className="sub-menu--mega__image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/menu-image/watches-banner-2.jpg"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </li>

        {/* <li>
          <Link
            href="/shop/left-sidebar"
            as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
          >
            <a>Women</a>
          </Link>
          <IoIosArrowDown />

          <ul className="sub-menu sub-menu--mega sub-menu--mega--column-4">
            <li className="sub-menu--mega__title">
                <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                <a>Watches</a>
              </Link>
                <li className="sub-menu--mega__title">
                  <Link
                    href="/shop/no-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/no-sidebar"}
                  >
                    <a>Smartwatches</a>
                  </Link>
                </li>
            </li>
            <li className="sub-menu--mega__title">
              <Link
                href="/shop/left-sidebar"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a>Eyewear</a>
              </Link>
              <ul className="sub-menu--mega__list">

                <li>
                  <Link
                    href="/shop/no-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/no-sidebar"}
                  >
                    <a>Sunglasses</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a>Glasses</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Link
                href="/shop/left-sidebar"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a>Bracelets</a>
              </Link>
            </li>
            <li>
              <div className="sub-menu--mega__image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/menu-image/megamenu-shop.png"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </li> */}

        <li className="position-relative">
          <Link
            href="/other/about"
            as={process.env.PUBLIC_URL + "/other/about"}
          >
            <a>About Us</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
