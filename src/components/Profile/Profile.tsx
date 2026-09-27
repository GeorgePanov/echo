import type { FC } from 'react';

import { Face4 } from '@mui/icons-material';
import { Box, Divider, Stack, Typography } from '@mui/material';

import { appColors } from '~/shared/colors';

export const Profile: FC = () => {
  return (
    <Stack>
      <Stack spacing={1}>
        <Typography sx={{ color: appColors.sage }} variant='h4'>
          Профиль
        </Typography>
        <Typography sx={{ color: appColors.sage }} variant='body1'>
          Детектив
        </Typography>
      </Stack>

      <Stack
        sx={{
          mt: '0.5rem',
          padding: '1rem',
          minHeight: '50vh',
          backgroundColor: appColors.sage,
          borderRadius: '1rem',
          color: appColors.pine,
        }}
      >
        <Box sx={{ m: '1rem 0', display: 'flex', justifyContent: 'center' }}>
          <Face4 sx={{ fontSize: '7rem' }} />
        </Box>

        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
          Должность: Главный следователь
        </Typography>
        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
          Статус: На задании
        </Typography>

        <Divider sx={{ margin: '0.5rem 0' }} />

        <Typography variant='body1'>
          Ты занимаешься расследованием исчезновения подарка.
        </Typography>

        <Divider sx={{ margin: '0.5rem 0' }} />

        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
          О детективе
        </Typography>
        <Typography variant='body2'>
          Внимательный, наблюдательный и готовый искать ответы там, где другие
          их не замечают.
        </Typography>

        <Divider sx={{ margin: '0.5rem 0' }} />

        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
          Навыки
        </Typography>
        <Typography variant='body2'>
          - Анализ улик
          <br />
          - Расшифровка посланий
          <br />
          - Поиск скрытых деталей
          <br />- Логическое мышление
        </Typography>

        <Divider sx={{ margin: '0.5rem 0' }} />

        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
          Личная информация
        </Typography>
        <Typography variant='body2'>
          - Роль: Детектив
          <br />
          - Специализация: Расследование загадочных дел
          <br />- Текущее дело: Исчезновение подарка
        </Typography>
      </Stack>
    </Stack>
  );
};
