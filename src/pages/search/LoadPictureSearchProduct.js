import React, {useEffect, useState} from 'react';
import {withRouter, useLocation} from "react-router-dom";
import {connect} from "react-redux";
import {getSearchProducts} from "../../store/actions/ProductAction";
import {goPageTop} from "../../utils/Helpers";
import {loadPictureSearchProductsData} from "../../utils/Services";
import _ from "lodash";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import ProductListSkeleton from "../../skeleton/productSkeleton/ProductListSkeleton";
import CategoryProductList from "../product/productList/CategoryProductList";


function useQuery() {
   return new URLSearchParams(useLocation().search);
}

const LoadPictureSearchProduct = (props) => {
   const {match} = props;
   const params = !_.isEmpty(match) ? match.params : {};
   const search_id = !_.isEmpty(params) ? params.search_id : "";
   const [searchKeyword, setSearchKeyword] = useState("");


   const query = useQuery();
   let page = query.get("page");
   page = page ? page : 1;

   const perPage = 36;
   const [loading, setLoading] = useState(false);
   const [products, setProducts] = useState([]);
   const [totalCount, setTotalCount] = useState(0);
   const [currentPage, setCurrentPage] = useState(0);


   useEffect(() => {
      goPageTop();
      if (page !== currentPage) {
         let selected = parseInt(page) - 1;
         setCurrentPage(page);
         let offset = Math.ceil(selected * perPage);
         loadingPictureSearchProduct(offset);
      } else if (search_id !== searchKeyword) {
         setSearchKeyword(search_id);
         loadingPictureSearchProduct(0);
      }
   }, [page, search_id]);


   const loadingPictureSearchProduct = (loadOffset = 0) => {
      setLoading(true);
      loadPictureSearchProductsData(search_id, loadOffset, perPage)
         .then(response => {
            let newProducts = JSON.parse(response.products);
            if (!_.isEmpty(newProducts)) {
               setProducts(newProducts.Content);
               setTotalCount(newProducts.TotalCount);
            }
            setLoading(false);
         });
   };


   return (
      <main className="main">
         <Breadcrumb
            current={"searching for"}
            collections={[{name: "Search"}]}
         />
         <div className="page-content">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     {loading ? (
                        <ProductListSkeleton/>
                     ) : (
                        <CategoryProductList
                           pageName={`pictureSearch`}
                           products={products}
                           slugKey={search_id}
                           perPage={perPage}
                           currentPage={currentPage}
                           TotalCount={totalCount}/>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
};


const mapStateToProps = (state) => ({
   general: JSON.parse(state.INIT.general),
   searchData: state.PRODUCTS.search_products,
   search_product_loading: state.LOADING.search_product_loading,
});

export default connect(mapStateToProps, {getSearchProducts})(
   withRouter(LoadPictureSearchProduct)
);
