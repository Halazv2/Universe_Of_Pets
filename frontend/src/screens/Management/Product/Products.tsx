import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import DataTable from '@/components/Table';
import { useGetProductsQuery, useGetCategoriesQuery } from '@/state/api';
import TransitionsModal from '@/components/TransitionsModal';
import CreateCategoryModal from './CreateCategoryModal';
import CreateProductModal from './CreateProductModal';

function Management() {
  const theme = useTheme();
  const [products, setProducts] = React.useState<any>([]);
  const [categories, setCategories] = React.useState<any>([]);

  const { data: productsData, isLoading: productsLoading, error: productsError } = useGetProductsQuery();
  const { data: categoriesData, isLoading: categoriesLoading, error: categoriesError } = useGetCategoriesQuery();

  useEffect(() => {
    if (productsData && categoriesData) {
      console.log(productsData);
      setProducts(
        productsData.map((product: any) => ({
          id: product._id,
          name: product.name,
          price: product.price + ' €',
          category: product.category,
          description: product.description
        }))
      );
      setCategories(
        categoriesData.map((category: any) => ({
          id: category._id,
          name: category.name,
          description: category.description
        }))
      );
    }
  }, [productsData, categoriesData]);

  const [openCategory, setOpenCategory] = React.useState(false);
  const handleOpenCategory = () => setOpenCategory(true);
  const [openProduct, setOpenProduct] = React.useState(false);
  const handleOpenProduct = () => setOpenProduct(true);

  const handleClose = () => {
    setOpenCategory(false);
    setOpenProduct(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        width: '100%',
        marginTop: '1rem'
      }}
    >
      <Box>
        <Typography variant="h4" fontSize="16px">
          Management of products
        </Typography>
      </Box>
      {products.length > 0 && (
        <Box
          width="100%"
          height="100%"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            width: '100%',

            marginTop: '1rem',
            '@media (max-width: 1200px)': {
              flexDirection: 'column'
            }
          }}
        >
          <Box width="100%">
            <Typography
              sx={{
                textAlign: 'left',
                width: '100%',
                color: 'grey.400',
                fontSize: '1rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                cursor: 'pointer'
              }}
              onClick={handleOpenProduct}
            >
              Products
            </Typography>
            <DataTable title="Products" data={products} />
          </Box>
          <Box width="100%">
            <Typography
              onClick={handleOpenCategory}
              sx={{
                textAlign: 'left',
                width: '100%',
                color: 'grey.400',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginBottom: '1rem'
              }}
            >
              Categories
            </Typography>
            <DataTable title="Products" data={categories} />
    
          </Box>
        </Box>
      )}

      <CreateCategoryModal open={openCategory} handleClose={handleClose} />
      <CreateProductModal open={openProduct} handleClose={handleClose} />
    </Box>
  );
}

export default Management;
