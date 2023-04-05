import { Box, Typography, useTheme, Button, TextField } from '@mui/material';
import React from 'react';
import FlexBetween from './FlexBetween';

type Props = {
  placeholder: string;
  error: boolean;
  message: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
};

const CostumInput = ({ placeholder, error, message, value, onChange, label }: Props) => {
  const { palette } = useTheme();
  return (
    <>
      <TextField
        label={label}
        variant="outlined"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        sx={{
          width: '100%',
          marginBottom: '1rem',
          color: error ? 'error.main' : 'grey.500',
          borderColor: error ? palette.grey[200] : palette.error[500],
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: error ? palette.error.main : palette.grey[500]
            },
            '&:hover fieldset': {
              borderColor: error ? palette.error.main : palette.grey[500]
            },
            '&.Mui-focused fieldset': {
              borderColor: error ? palette.error.main : palette.grey[500]
            },
            // label grey color
            '& .MuiInputLabel-root': {
              color: error ? palette.error.main : palette.grey[500]
            }
          }
        }}
      />
      {error && (
        <Typography
          variant="h6"
          color={palette.error.main}
          sx={{
            textAlign: 'left',
            color: palette.error.main,
            textTransform: 'uppercase',
            margin: '0 0 1rem 0'
          }}
        >
          {message}
        </Typography>
      )}
    </>
  );
};

export default CostumInput;
