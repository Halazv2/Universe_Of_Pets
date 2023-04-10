import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import DataTable from '@/components/Table';
import { useGetProductsQuery, useGetCategoriesQuery } from '@/state/api';
import TransitionsModal from '@/components/TransitionsModal';
import CreateCategoryModal from './CreateCategoryModal';
import CreateProductModal from './CreateProductModal';
import { set } from 'immer/dist/internal';
import UpadeteProductModal from './UpdateProductModal';
import UpdateCategoryModal from './UpdateCategoryModal';

function Management() {
  const theme = useTheme();
  const [products, setProducts] = React.useState<any>([]);
  const [categories, setCategories] = React.useState<any>([]);

  const { data: productsData, isLoading: productsLoading, error: productsError } = useGetProductsQuery();
  const { data: categoriesData, isLoading: categoriesLoading, error: categoriesError } = useGetCategoriesQuery();
  const [openProduct, setOpenProduct] = React.useState(false);
  const [pId, setProductId] = React.useState(null);
  const [cId, setCategoryId] = React.useState(null);
  const [openCategory, setOpenCategory] = React.useState(false);
  const [openUpdateCategory, setOpenUpdateCategory] = React.useState(false);

  useEffect(() => {
    if (productsData && categoriesData) {
      setProducts(
        productsData.map((product: any) => ({
          id: product.id,
          name: product.name,
          price: product.price + ' €',
          category: product.category,
          description: product.description,
          operation: product.id
        }))
      );
      setCategories(
        categoriesData.map((category: any) => ({
          id: category._id,
          name: category.name,
          description: category.description,
          operation: category._id
        }))
      );
    }
  }, [productsData, categoriesData]);

  const handleOpenCategory = () => {
    setOpenCategory(true);
  };

  const handleEditCategory = (id: string) => {
    setOpenUpdateCategory(true);
    setCategoryId(id);
    // console.log(id);
  };

  const handleOpenProduct = () => {
    setOpenProduct(true);
  };

  const [openUpdateProduct, setOpenUpdateProduct] = React.useState(false);
  const handleEditProduct = async (id: string) => {
    setProductId(id);
    setOpenUpdateProduct(true);
  };

  const handleClose = () => {
    setOpenCategory(false);
    setOpenProduct(false);
    setOpenUpdateProduct(false);
    setOpenUpdateCategory(false);
  };

  const handleDeleteProduct = (id: string) => {
    fetch(`http://127.0.0.1:4000/api/products/${id}`, {
      method: 'delete'
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(products.filter((product: any) => product.id !== id));
      });
  };

  const handleDeleteCategory = (id: string) => {
    fetch(`http://127.0.0.1:4000/api/category/${id}`, {
      method: 'delete'
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(categories.filter((category: any) => category.id !== id));
      });
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
            <DataTable title="Products" data={products} edit={handleEditProduct} destroy={handleDeleteProduct} />
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
            <DataTable title="Products" data={categories} edit={handleEditCategory} destroy={handleDeleteCategory} />
          </Box>
        </Box>
      )}

      <CreateCategoryModal open={openCategory} handleClose={handleClose} />
      {openUpdateProduct && <UpadeteProductModal open={openUpdateProduct} handleClose={handleClose} productId={pId} />}

      <CreateProductModal open={openProduct} handleClose={handleClose} />
      {openUpdateCategory && <UpdateCategoryModal open={openUpdateCategory} handleClose={handleClose} categoryId={cId} />}
    </Box>
  );
}

export default Management;
