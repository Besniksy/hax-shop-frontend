import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductBySearch } from "../../../redux/actions";

const SearchOverlay = ({ activeStatus, getActiveStatus }) => {
  const router = useRouter()

  const [search, setSearch] = useState('')

  const dispatch = useDispatch()
  const products = useSelector(state=> state.product)

  const removeLayoutOnSubmit = (e) => {
    e.preventDefault()
    // dispatch(getAllProductBySearch(search))
    router.push(`/shop?search=${search}`)
    getActiveStatus(false);
    document.querySelector("body").classList.remove("overflow-hidden");
  }
  return (
    <div className={`search-overlay ${activeStatus ? "active" : ""}`}>
      {/*=======  close icon  =======*/}
      <button
        className="search-overlay__close-icon"
        onClick={() => {
          getActiveStatus(false);
          document.querySelector("body").classList.remove("overflow-hidden");
        }}
      >
        <MdClose />
      </button>
      {/*=======  End of close icon  =======*/}
      {/*=======  search overlay content  =======*/}
      <div className="search-overlay__content">
        <form className="space-mb--20" onSubmit={removeLayoutOnSubmit}>
          <input 
          type="search" 
          placeholder="Search Products..."  
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          />
        </form>
        <div className="search-overlay__hint"># Hit enter to search</div>
      </div>
      {/*=======  End of search overlay content  =======*/}
    </div>
  );
};

export default SearchOverlay;
