import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import DataTable from '@/components/Table';
import { useGetProductsQuery } from '@/state/api';
import TransitionsModal from '@/components/TransitionsModal';
import CostumInput from '@/components/CostumInput';
import CostumButton from '@/components/CostumButton';
import { useSetCategoryMutation } from '@/state/api';
import ImageUploader from '@/components/MultipleImageUpload';

type props = {
  open: boolean;
  handleClose: () => void;
  children?: React.ReactNode;
};

type values = {
  name: string;
  description: string;
};

function CreateCategoryModal({ open, handleClose, children }: props) {
  const theme = useTheme();

  const [values, setValues] = React.useState<values>({ name: '', description: '' });
  const [errors, setErrors] = React.useState({ name: false, description: false });

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const [mutateAsync, { isLoading, error }] = useSetCategoryMutation();

  const onSubmit = async () => {
    if (values.name === '') {
      setErrors({ ...errors, name: true });
    } else if (values.description === '') {
      setErrors({ ...errors, description: true });
    } else {
      await mutateAsync({
        name: values.name,
        description: values.description
      });
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
            Create category
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

export default CreateCategoryModal;
