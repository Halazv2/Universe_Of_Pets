import React, { useEffect } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import TransitionsModal from '@/components/TransitionsModal';
import CostumInput from '@/components/CostumInput';
import CostumButton from '@/components/CostumButton';
import { useSetProductsMutation } from '@/state/api';
import Autocomplete from '@mui/material/Autocomplete';
import CloseIcon from '@mui/icons-material/Close';
import ImageUploader from '@/components/MultipleImageUpload';

type props = {
  open: boolean;
  handleClose: () => void;
  children?: React.ReactNode;
  type: boolean;
  productId?: any;
};

type values = {
  name: string;
  description: string;
  price: number;
  categories: Array<string>;
};

function CreateProductModal({ open, handleClose, children, type, productId }: props) {
  const theme = useTheme();
  const [image, setImage] = React.useState<Array<string>>([]);

  const [values, setValues] = React.useState<values>({ name: '', description: '', price: 0, categories: [] });
  const [errors, setErrors] = React.useState({ name: false, description: false, price: false, category: false });
  const [ProducData , setProducData] = React.useState<any>();

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const [mutateAsync, { isLoading, error }] = useSetProductsMutation();

  useEffect(() => {
    setValues({ ...values, name: ProducData?.name, description: ProducData?.description, price: ProducData?.price, categories: ProducData?.category });
  }, [ProducData]);

  const onSubmit = async () => {
    if (values.name === '') {
      setErrors({ ...errors, name: true });
    } else if (values.description === '') {
      setErrors({ ...errors, description: true });
    } else if (values.price === 0) {
      setErrors({ ...errors, price: true });
    } else if (values.categories.length === 0) {
      setErrors({ ...errors, category: true });
    } else {
      // return;
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('description', values.description);
      formData.append('price', values.price.toString());
      values.categories.forEach((category) => formData.append('category', category));
      image.forEach((img) => formData.append('images', img));
      console.log(image);
      // console.log(formData);
      // return;
      if(type){
      await mutateAsync(formData)
        .unwrap()
        .then((product) => {
          console.log('Product created:', product);
        })
        .catch((error) => {
          console.error('Failed to create product:', error);
        });
      }else{
        fetch(`http://127.0.0.1:4000/api/products/${productId}`, {
          method: 'PUT',
          body: formData
        })
          .then((response) => response.json())
          .then((result) => {
            console.log('Success:', result);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }


      handleClose();
    }
  };

  let [data, setdata] = React.useState<any>([]);
  useEffect(() => {
    fetch('http://127.0.0.1:4000/api/category')
      .then((response) => response.json())
      .then((result) => {
        const unique = result.filter((v: any, i: any, a: any) => a.findIndex((t: any) => t.name === v.name) === i);
        setdata(unique);
      });

    if (productId) {
      console.log(productId)
      fetch(`http://127.0.0.1:4000/api/products/byId/${productId}`)
        .then((response) => response.json())
        .then((result) => {
          setProducData(result[0]);
        }
      );
    }
  }, []);

  const handleCloseModal = () => {
    setProducData(undefined);
    handleClose();
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
      <TransitionsModal open={open} handleClose={handleCloseModal}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            borderRadius: '0.5rem'
          }}
        >
          <CloseIcon
            sx={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              color: 'black',
              cursor: 'pointer'
            }}
            onClick={handleClose}
          />
        </Box>

        <Box
          sx={{
            padding: '0.5rem'
          }}
        >
          <Typography
            variant="h4"
            fontSize="20px"
            sx={{
              fontWeight: 'medium',
              textAlign: 'center',
              color: 'black',
              textTransform: 'uppercase',
              letterSpacing: '0.1rem',
              marginTop: '1.5rem'
            }}
          >
            {
              (type)? 'Create Product' : 'Edit Product '
            }
          </Typography>
        </Box>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          style={{ width: '100%' }}
        >
          <Box
            sx={{
              padding: '1.5rem'
            }}
          >
            <CostumInput label="Name" placeholder="Name" error={errors.name} message="Error message" value={values.name} onChange={handleChange('name')} />
            <CostumInput
              label="Description"
              placeholder="Description"
              error={errors.description}
              message="Error message"
              value={values.description}
              onChange={handleChange('description')}
            />
            <CostumInput label="Price" placeholder="Price" error={errors.price} message="Error message" value={values.price} onChange={handleChange('price')} />
            <Autocomplete
              multiple
              id="combo-box-demo"
              options={data}
              getOptionLabel={(option) => {
                return option?.name;
              }}
              onChange={(event, newValue) => {
                setValues({ ...values, categories: newValue.map((item: any) => item._id) });
                console.log(values.categories);
              }}
              sx={{ marginBottom: '1rem' }}
              renderInput={(params) => <TextField {...params} label="Category" />}
            />
            <ImageUploader image={image} setImage={setImage} />

            <CostumButton text="submit" action={onSubmit} />
          </Box>
        </form>
      </TransitionsModal>
    </Box>
  );
}

export default CreateProductModal;
