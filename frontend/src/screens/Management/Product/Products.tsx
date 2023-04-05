import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import DataTable from '@/components/Table';
import { useGetProductsQuery, useGetCategoriesQuery } from '@/state/api';
import TransitionsModal from '@/components/TransitionsModal';
import CreateCategoryModal from './CreateCategoryModal';

function Management() {
  const theme = useTheme();
  // setProducts(
  //   products.map((product: any) => ({
  //     name: product.name,
  //     price: product.price + ' €',
  //     category: product.category,
  //     description: product.description
  //   }))
  // );
  const [products, setProducts] = React.useState<any>([]);
  const [categories, setCategories] = React.useState<any>([]);

  const { data: productsData, isLoading: productsLoading, error: productsError } = useGetProductsQuery();
  const { data: categoriesData, isLoading: categoriesLoading, error: categoriesError } = useGetCategoriesQuery();

  useEffect(() => {
    if (productsData && categoriesData) {
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                marginBottom: '1rem'
              }}
            >
              Products
            </Typography>
            <DataTable title="Products" data={products} />
          </Box>
          <Box width="100%">
            <Box onClick={handleOpen}>
              <Typography
                sx={{
                  textAlign: 'left',
                  width: '100%',
                  color: 'grey.400',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem'
                }}
              >
                Categories
              </Typography>
            </Box>
            <DataTable title="Products" data={categories} />
          </Box>
        </Box>
      )}

      <CreateCategoryModal open={open} handleClose={handleClose} />
    </Box>
  );
}

export default Management;
