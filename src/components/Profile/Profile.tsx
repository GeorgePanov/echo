import type { FC } from 'react';

import { Face4 } from '@mui/icons-material';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { green } from '@mui/material/colors';

export const Profile: FC = () => {
  return (
    <Stack>
      <Stack spacing={1}>
        <Typography sx={{ color: green[200] }} variant='h4'>
          Профиль
        </Typography>
        <Typography sx={{ color: green[200] }} variant='body1'>
          Детектив
        </Typography>
      </Stack>

      <Stack
        sx={{
          mt: '0.5rem',
          padding: '1rem',
          minHeight: '50vh',
          backgroundColor: green[800],
          borderRadius: '1rem',
        }}
      >
        <Box sx={{ m: '1rem 0', display: 'flex', justifyContent: 'center' }}>
          <Face4 sx={{ fontSize: '7rem', color: green[200] }} />
        </Box>

        <Typography variant='body1' sx={{ color: green[100] }}>
          Должность: Главный следователь
        </Typography>
        <Typography variant='body1' sx={{ color: green[100] }}>
          Статус: На задании
        </Typography>

        <Divider sx={{ margin: '0.5rem 0' }} />

        <Typography variant='body1' sx={{ color: green[100] }}>
          Ты занимаешься расследованием исчезновения подарка.
        </Typography>

        <Divider sx={{ margin: '0.5rem 0' }} />

        <Typography variant='body1' sx={{ color: green[100] }}>
          О детективе
        </Typography>
        <Typography variant='body2' sx={{ color: green[200] }}>
          Внимательный, наблюдательный и готовый искать ответы там, где другие
          их не замечают.
        </Typography>

        <Divider sx={{ margin: '0.5rem 0' }} />

        <Typography variant='body1' sx={{ color: green[100] }}>
          Навыки
        </Typography>
        <Typography variant='body2' sx={{ color: green[200] }}>
          - Анализ улик
          <br />
          - Расшифровка посланий
          <br />
          - Поиск скрытых деталей
          <br />- Логическое мышление
        </Typography>

        <Divider sx={{ margin: '0.5rem 0' }} />

        <Typography variant='body1' sx={{ color: green[100] }}>
          Личная информация
        </Typography>
        <Typography variant='body2' sx={{ color: green[200] }}>
          Роль: Детектив
          <br />
          Специализация: Расследование загадочных дел
          <br />
          Текущее дело: Исчезновение подарка
        </Typography>
      </Stack>
    </Stack>
  );
};
