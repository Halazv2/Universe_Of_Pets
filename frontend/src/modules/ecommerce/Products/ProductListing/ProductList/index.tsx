import React from 'react';
import ListItem from './ListItem';
import AppList from '../../../../../@crema/core/AppList';
import ListEmptyResult from '../../../../../@crema/core/AppList/ListEmptyResult';
import {ProductData} from 'types/models/ecommerce/EcommerceApp';

interface ProductListProps {
  ecommerceList: ProductData[];
  loading: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ecommerceList, loading}) => {
  return (
    <AppList
      delay={200}
      data={ecommerceList}
      renderRow={(item) => <ListItem item={item} key={item.id} />}
      ListEmptyComponent={
        <ListEmptyResult content='No product found' loading={loading} />
      }
    />
  );
};

export default ProductList;
