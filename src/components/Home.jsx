import React from 'react'
import {useEffect} from 'react';
import {useState} from 'react';

function Home() {


    /***all the products***/
    const [products, setProducts] = useState(null);

    /************ all the categories -> a product**********/
    const [categories, setCategories] = useState([]);

    /**********Action***********/

    /*********************** state ->term with which you want to filter the product list*****************************/
    const [searchTerm, setSearchTerm] = useState("");

    /*********************** sorting => 0:unsorted, 1 : Increasing order, -1: decreasing order****************************/
    const [sortDir, setSortDir] = useState(0);

    /**************************** currcategory : category group you result **********************************/
    const [currentCategory, setCurrentCategory] = useState(["All Categories"]);

   // const {pageSize, pageNumber, setPageSize, setPageNumber} = usePaginationContext();


    useEffect(() => {
        (async function fetchData() {
            const response = await fetch(`https://fakestoreapi.com/products`);
            const productData = await response.json();

            // productData.forEach((elem) => {
            //   console.log(elem.title);
            // });

            setProducts(productData);
        })();
    }, []);

    useEffect(() => {
        (async function fetchData() {
            const response = await fetch(`https://fakestoreapi.com/products/categories`);
            const CategorieData = await response.json();
            setCategories(CategorieData);
        })();
    }, []);

 //   let object = basicOps(products, searchTerm, sortDir, currentCategory, pageNumber, pageSize);
 //   let filteredArray = object.modifiedArray;
 //   let totalPages = object.totalPages;

    return (
        <>
            <header className="nav_wrapper">
                <div className="search_sortWrapper">
                    <input className="search_input"
                           type="text"
                           value={searchTerm}
                           onChange={(e) => {
                               setSearchTerm(e.target.value)
                           }}>
                    </input>
                </div>
                <div className='categories_wrapper'>
                    <Categories
                        CategoryList={categories}
                        setCurrentCategory={setCurrentCategory}
                    />
                </div>

            </header>

            <main className="product_wrapper">
                {products === null ? <h4>...Loading</h4> :
                    <>
                        {products.map((product) => {
                            return (<div className="product">
                                <img src={product.image} alt="" className="product_image"/>
                                <div className="product_meta">
                                    <p className="product_title"> {product.title}</p>
                                    <p className="price"> {"price: $" + product.price}</p>

                                </div>
                            </div>);
                        })}
                    </>
                }


            </main>

        </>
    )
}

export default Home