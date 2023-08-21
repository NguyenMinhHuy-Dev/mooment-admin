import React, { useEffect, useState } from 'react';
import "./Dashboard.css";
import { OrderWidgets } from './OrderWidgets';
import { OrdersTable } from './OrdersTable';

export const Dashboard = () => {
  const [data, setData] = useState([]); 
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

    useEffect(() => {
      const getData = async () => {
          await fetch(process.env.REACT_APP_API_URL + '/orders')
          .then((res) => res.json())
          .then((data) => {  
              setData(data);
          })
          .catch((err) => {
              // alert(err);  
          })
      }
      const getDataCate = async () => {
          await fetch(process.env.REACT_APP_API_URL + '/categories')
          .then((res) => res.json())
          .then((data) => {  
            setCategory(data);
          })
          .catch((err) => {
              // alert(err);  
          })
      }
      const getDataProduct = async () => {
          await fetch(process.env.REACT_APP_API_URL + '/products')
          .then((res) => res.json())
          .then((data) => {  
            setProducts(data);
          })
          .catch((err) => {
              // alert(err);  
          })
      }

        getData()
        getDataCate()
        getDataProduct();
    }, [])
  return (
    <div className='dashboard'>
      <OrderWidgets data={data}/>
      <OrdersTable data={data} cate={category} products={products}/>
    </div>
  )
}
