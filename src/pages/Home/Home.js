import React from "react";
import { useGetAllProductsQuery } from "../../store/productsApi";
import ProductItems from "../../components/ProductItems/ProductItems";
import Loading from "../../components/Loading/Loading";
import { useSelector} from "react-redux";
// import {prodFetch} from '../../store/sliceProducts'
// import { featuredFilter } from "../../store/sliceProducts"; 







const Home = () => {

const res = useSelector(state=>state.cart.cartTotalQuantity)
console.log('res-home',res)

// 1способ получения данных через Api toolkit
    // получеение через мок апи 
    // const todos = useSelector(state=>state.products.items)
    // console.log('todos',todos)







// 2 второй способ получения через Api

    const {data,error,isLoading} = useGetAllProductsQuery()




// useEffect(()=>{
//     setPro(data)
//     let tmpArray = [];
//     function itemCheck(item) {
//         if(item.featured) {
//             return tmpArray.push(item)
//         }
//     }
//     setPro(pro.filter((item) => itemCheck(item)))
// },[])




//  console.log('res',res)
    






// let tmpArray = [];
//   function itemCheck(item) {
//       if(item.featured) {
//           return tmpArray.push(item)
//       }
//   }
//  const res =  todos.filter((item) => itemCheck(item))
//  console.log('ddddddd',res)
 
 



  return (
    <div className="home_wrap">
      <div className="container">
          <div className="prod_wrap">
        
              {
                  isLoading ? <Loading /> : error ?  <span>Error</span> : data.map(item=><ProductItems key={item.id} item={item} />)
              } 
              {/* {
                   todos.map(item=><ProductItems key={item.id} item={item} />)
              }  */}
          </div>
          {/* <h2 style={{textAlign:'center',marginTop:'30px',marginBottom:'30px'}}>Featured</h2> */}
          <div className="prod_wrap">
          {/* {featured.map(item=><ProductItems key={item.id} item={item} />)} */}
          </div>
          
      </div>
    </div>
  );
};

export default Home;
