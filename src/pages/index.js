import { connect, useDispatch, useSelector } from "react-redux";
import { getProducts } from "../lib/product";
import { LayoutOne } from "../components/Layout";
import { HeroSliderOne } from "../components/HeroSlider";
import { ProductTab } from "../components/ProductTab";
import { ImageCta } from "../components/Cta";
import heroSliderData from "../data/hero-sliders/hero-slider-one.json";
import imageCtaData from "../data/image-cta/image-cta-one.json";
import { getAllProducts, getInitialData, isUserLoggedIn } from '../redux/actions'
import { useEffect } from "react";

const Home = ({ newProducts, popularProducts, saleProducts }) => {
  const productsss = useSelector(state => state.product)
  const dispatch = useDispatch()
  // const auth = useSelector(state => state.authReducer)
  // console.log(auth)


    useEffect(() => {

    dispatch(getAllProducts()
    )
  }, [])

  console.log(productsss)
  

  return (
    <LayoutOne aboutOverlay={false}>
      {/* hero slider */}
      <HeroSliderOne sliderData={heroSliderData} />

      {/* product tab */}
      <ProductTab
        newProducts={newProducts}
        popularProducts={popularProducts}
        saleProducts={saleProducts}
      />

      {/* image cta */}
      <ImageCta
        image={imageCtaData.image}
        tags={imageCtaData.tags}
        title={imageCtaData.title}
        url={imageCtaData.url}
      />
    </LayoutOne>
  );
};

const mapStateToProps = (state) => {
  const products = state.product.products;
  return {
    newProducts: getProducts(products, "decor", "new", 9),
    popularProducts: getProducts(products, "decor", "popular", 9),
    saleProducts: getProducts(products, "decor", "sale", 9)
  };
};

export default connect(mapStateToProps)(Home);
