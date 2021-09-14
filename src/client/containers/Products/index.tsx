import React, {useEffect} from 'react';
import {useAppDispatch} from '../../hooks/redux';
import {fetchProducts} from '../../redux/products/actions';

const ProductLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return <div>PRODUCTS</div>;
};

export default ProductLayout;
