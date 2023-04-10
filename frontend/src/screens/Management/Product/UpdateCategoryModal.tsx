import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import DataTable from '@/components/Table';
import { useGetProductsQuery } from '@/state/api';
import TransitionsModal from '@/components/TransitionsModal';
import CostumInput from '@/components/CostumInput';
import CostumButton from '@/components/CostumButton';
import { useGetCategoryQuery, useUpdateCategoryMutation } from '@/state/api';
import ImageUploader from '@/components/MultipleImageUpload';

type props = {
  open: boolean;
  handleClose: () => void;
  categoryId?: any;
};

type values = {
  name: string;
  description: string;
};

function UpdateCategoryModal({ open, handleClose, categoryId }: props) {
  const theme = useTheme();

  const [values, setValues] = React.useState<values>({ name: '', description: '' });
  const [errors, setErrors] = React.useState({ name: false, description: false });

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const [mutateAsync, { isLoading, error }] = useUpdateCategoryMutation();
  const { data } = useGetCategoryQuery(categoryId);

  if (data) {
    values.name === '' && setValues({ ...values, name: data.category.name, description: data.category.description });
    console.log(data);
  }

  const onSubmit = async () => {
    if (values.name === '') {
      setErrors({ ...errors, name: true });
    } else if (values.description === '') {
      setErrors({ ...errors, description: true });
    } else {
      await mutateAsync({ id: categoryId, data: values });
      handleClose();
    }
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
      <TransitionsModal open={open} handleClose={handleClose}>
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
            Create Category
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

            <CostumButton text="submit" action={onSubmit} />
          </Box>
        </form>
      </TransitionsModal>
    </Box>
  );
}

export default UpdateCategoryModal;
