import type { FC } from 'react';

import { Skeleton } from '@mui/material';
import { useState } from 'react';

import BarcodePhoto from '~/shared/assets/Barcode.png';

export const Barcode: FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && (
        <Skeleton
          variant='rounded'
          width='100%'
          height='100%'
          animation='pulse'
          sx={{ aspectRatio: '224 / 130' }}
        />
      )}

      <img
        src={BarcodePhoto}
        alt='Штрихкод'
        onLoad={() => setIsLoaded(true)}
        style={{ display: isLoaded ? 'block' : 'none' }}
      />
    </>
  );
};
