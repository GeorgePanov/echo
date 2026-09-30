import type { FC } from 'react';

import { LockClock } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';

import { appColors, incantoColors } from '~/shared/colors';

import { Barcode } from './ui/Barcode';

export const Restricted: FC = () => {
  const isRestricted = new Date() < new Date('2026-10-03T09:00:00');

  if (isRestricted) {
    return (
      <Stack
        spacing={2}
        sx={{
          minHeight: '70vh',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: appColors.secondary,
        }}
      >
        <LockClock sx={{ fontSize: '5rem' }} />

        <Typography variant='h5'>Доступ ограничен</Typography>

        <Typography>
          Раздел откроется после
          <br />
          <strong>09:00 03.10.2026</strong>
        </Typography>
      </Stack>
    );
  }

  return (
    <Stack spacing={'1rem'} sx={{ color: incantoColors.cream }}>
      <Typography variant='body1'>
        Догорая,
        <br />
        Я тебя очень сильно люблю.
        <br />
        Мне очень нравится, как ты выглядишь в красивом нижнем белье. А также
        мне понравилось как мы его с тобой выбирали.
        <br />
        Хочу снова пережить этот момент с тобой, а для этого нам пригодится это:
      </Typography>

      <Stack
        sx={{
          height: '11rem',
          padding: '1rem',
          borderRadius: '1rem',

          justifyContent: 'center',
          alignItems: 'center',

          backgroundColor: incantoColors.nude,
          color: incantoColors.blush,
        }}
      >
        <Typography
          variant='h3'
          sx={{
            fontFamily: '"Bodoni Moda", serif',
            fontWeight: 500,
            letterSpacing: '0.08em',
          }}
        >
          INCANTO
        </Typography>

        <Typography variant='body2'>Сертификат номиналом 10 000 р</Typography>
      </Stack>

      <Stack sx={{ overflow: 'hidden', borderRadius: '1rem' }}>
        <Barcode />
      </Stack>
    </Stack>
  );
};
