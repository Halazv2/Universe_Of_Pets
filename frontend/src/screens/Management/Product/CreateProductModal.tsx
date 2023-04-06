import React, { useEffect } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import DataTable from '@/components/Table';
import { useGetProductsQuery } from '@/state/api';
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
};

type values = {
  name: string;
  description: string;
  price: number;
  categories: Array<string>;
};

function CreateProductModal({ open, handleClose, children }: props) {
  const theme = useTheme();
  const [image, setImage] = React.useState<Array<string>>([]);

  const [values, setValues] = React.useState<values>({ name: '', description: '', price: 0, categories: [] });
  const [errors, setErrors] = React.useState({ name: false, description: false, price: false, category: false });

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const [mutateAsync, { isLoading, error }] = useSetProductsMutation();

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
      // console.log(image);
      // return;
      const res = await mutateAsync({
        name: values.name,
        description: values.description,
        price: values.price,
        category: values.categories,
        images: image
      });
      if (res) {
        handleClose();
      }
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
  }, []);

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
      <TransitionsModal open={open} handleClose={handleClose}>
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
            Create Product
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
