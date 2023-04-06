import React, { useState } from 'react';
import Button from '@mui/material/Button/Button';
import Box from '@mui/material/Box';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

type props = {
  image: Array<string>;
  setImage: (value: React.SetStateAction<Array<string>>) => void;
};

function ImageUploader({ image, setImage }: props) {
  const [images, setImages] = useState<Array<string>>([]);
  const handleMultipleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      Promise.all(
        files.map((file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener('load', (ev) => {
              resolve(ev.target?.result);
            });
            reader.addEventListener('error', reject);
            reader.readAsDataURL(file);
          });
        })
      ).then((images) => {
        setImages((prev: any) => [...prev, ...images]);

        // set file name and contentType in object
        console.log(files);
        const fileName = files[0].name;
        const contentType = files[0].type;

        // create a new object with file name and content type
        const fileObject = {
          fileName,
          contentType
        };

        // set file object in state
        setImage((prev: any) => [...prev, fileObject]);
      });
    }
  };

  const deleteImage = (index: number) => {
    setImage((prev: any) => prev.filter((_: any, i: number) => i !== index));
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
      <label htmlFor="upload-photo">
        <input multiple style={{ display: 'none' }} id="upload-photo" name="upload-photo" type="file" onChange={handleMultipleUpload} />
        <Button color="primary" variant="contained" component="span">
          Upload button
        </Button>
      </label>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          width: '100%',
          marginTop: '1rem',
          overflowX: 'scroll'
        }}
      >
        {image &&
          image.map((img: string | undefined, index: React.Key | null | undefined) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                height: '100px',
                borderRadius: '5px',
                overflow: 'hidden',
                margin: '1rem 0'
              }}
            >
              <HighlightOffIcon color="action" sx={{ position: 'absolute', top: '0', right: '0', cursor: 'pointer' }} onClick={() => deleteImage(index as number)} />

              <img key={index} src={img} alt="uploaded" style={{ width: '100%', height: '100px' }} />
            </Box>
          ))}
      </Box>
    </Box>
  );
}

export default ImageUploader;
