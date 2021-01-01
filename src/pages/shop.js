import { useState, useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import { SlideDown } from "react-slidedown";
import { LayoutTwo } from "../components/Layout";
import { BreadcrumbOne } from "../components/Breadcrumb";
import { getSortedProducts } from "../lib/product";
// import products from "../../data/products.json";
import {
  ShopHeader,
  ShopFilter,
  ShopSidebar,
  ShopProducts
} from "../components/Shop";
import { Router, useRouter } from 'next/router'
import axiosInstance from "../helpers/axios"
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { getAllProductBySearch, getAllProducts, getCategoryProductBySearch, getProductsByMainCategory, getProductsByMainCategoryAndSearch, getProductsBySlug } from "../redux/actions";


const FullwidthLeftSidebar = ({path, search}) => {
  const [layout, setLayout] = useState("grid four-column");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [shopTopFilterStatus, setShopTopFilterStatus] = useState(false);
  const [searchField, setSearchField] = useState('')
  const [searchAllField, setSearchAllField] = useState('')
  

  const pageLimit = 20;

  // const router = useRouter()
  
  const categorySlug = path
  // if(categorySlug !== "watches" || "glasses" || "sunglasses" || "eyewear" || "bracelets"){
  //   router.push('/404')
  // }

  const productsss = useSelector(state=> state.product)
  const dispatch = useDispatch()
  const reduxProducts = productsss.products
  const category = useSelector((state) => state.category);
  const cart = useSelector(state => state.cartData)
  console.log(cart)

  // const {path} = router.query

  let searchedItem
  
  if(search == undefined){
    searchedItem = ''
  }else{
    searchedItem = search
  }
  console.log(categorySlug)



 
  useEffect(() => {

    if(categorySlug == undefined){
      // dispatch(getAllProducts())
      dispatch(getAllProductBySearch(searchedItem))
    }else if(categorySlug == 'eyewear' || categorySlug == 'watches'){
      dispatch(getProductsByMainCategory(categorySlug))
    }
    else {     
      dispatch(getProductsBySlug(categorySlug))
    }

    
  }, [categorySlug, search])

  useEffect(() => {
    if(reduxProducts){
      if(reduxProducts.length == 0){
        console.log('loading')
        setProducts([])
      }else{
        setProducts(reduxProducts)
      }

    }

  }, [reduxProducts])

console.log(productsss, 'redux products')
  
  // useEffect(() => {
  //   if(categorySlug == undefined && searchField !== ""){
  //     dispatch(getAllProductBySearch(searchField))
  //   }
  //   if(categorySlug !== undefined && searchField !== "") {     
  //     dispatch(getCategoryProductBySearch(categorySlug, searchField))
  //   }
  // }, [searchField])



  const onSearchChange = e => {
    const query = e.target.value
    setSearchField(query)
    if(query.length == 0 && categorySlug){
      dispatch(getProductsBySlug(categorySlug))

    }
    if(query.length == 0 && (categorySlug == 'eyewear' || categorySlug == 'watches') ){
      dispatch(getProductsByMainCategory(categorySlug))

    }
    if(query.length == 0 && categorySlug == undefined){
      dispatch(getAllProducts())

    }

  }


  const onSubmitHandle = (e) => {
    
    e.preventDefault()

    if(searchField.length == 0 && search == undefined){
      dispatch(getProductsBySlug(categorySlug))
      

    }
    if(searchField.length == 0 && categorySlug == undefined && search == undefined){
      dispatch(getAllProducts())

    }

    if(searchField.length > 0 && categorySlug == undefined){
      dispatch(getAllProductBySearch(searchField))

    }

    if(searchField.length > 0 && categorySlug){
      dispatch(getCategoryProductBySearch(categorySlug, searchField))

    }

    if(searchField.length > 0 && (categorySlug=='eyewear' || categorySlug == 'watches' ) ){
      dispatch(getProductsByMainCategoryAndSearch(categorySlug, searchField))

    }


    
  }


  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  const capitalizeFirstLetter = (string) => {
    if(string !== undefined){
      let str = string.replace(/-/g, ' ')
      let capitalizeEveryWord = str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
      return capitalizeEveryWord
    }else{
      return "Shop"
    }
  }


  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle={capitalizeFirstLetter(categorySlug) }
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-1.png"
      >
        <ul className="breadcrumb__list">
          <li>
            <Link href="/" as={process.env.PUBLIC_URL + "/"}>
              <a>Home</a>
            </Link>
          </li>

          <li>{capitalizeFirstLetter(categorySlug)}</li>
        </ul>
      </BreadcrumbOne>
      <div className="shop-page-content">
        {/* shop page header */}
        <ShopHeader
          getLayout={getLayout}
          getFilterSortParams={getFilterSortParams}
          productCount={products.length}
          sortedProductCount={currentData.length}
          shopTopFilterStatus={shopTopFilterStatus}
          setShopTopFilterStatus={setShopTopFilterStatus}
          layoutClass="wide"
        />

        {/* shop header filter */}
        {/* <SlideDown closed={shopTopFilterStatus ? false : true}>
          <ShopFilter products={products} getSortParams={getSortParams} />
        </SlideDown> */}

        {/* shop page body */}
        <div className="shop-page-content__body space-mt--r130 space-mb--r130">
          <Container className="wide">
            <Row>
              <Col
                lg={3}
                className="order-2 order-lg-1 space-mt-mobile-only--50"
              >
                {/* shop sidebar */}
                <ShopSidebar
                  products={products}
                  getSortParams={getSortParams}
                  onSearchChange = {onSearchChange}
                  onSubmitHandle={onSubmitHandle}
                  searchField={searchField}
                  categorySlug={categorySlug}
                />
              </Col>

              <Col lg={9} className="order-1 order-lg-2">
                {/* shop products */}
                <ShopProducts path={categorySlug} layout={layout} products={currentData} />

                {/* shop product pagination */}
                <div className="pro-pagination-style">
                  <Paginator
                    totalRecords={sortedProducts.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </LayoutTwo>
  );
};

FullwidthLeftSidebar.getInitialProps = async ({ query }) => {return {path: query.path, search: query.search}}

export default FullwidthLeftSidebar;
