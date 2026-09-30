import type { FC } from 'react';

import { Face4 } from '@mui/icons-material';
import { Box, Divider, Stack, Typography } from '@mui/material';

import { appColors } from '~/shared/colors';

export const Profile: FC = () => {
  return (
    <Stack spacing={2}>
      {/* Детектив */}
      <Stack spacing={1}>
        <Typography sx={{ color: appColors.sage }} variant='h4'>
          Детектив
        </Typography>
        <Typography sx={{ color: appColors.sage }} variant='body1'>
          Главный следователь
        </Typography>
      </Stack>

      <Stack
        sx={{
          padding: '1rem',
          backgroundColor: appColors.sage,
          borderRadius: '1rem',
          color: appColors.pine,
        }}
      >
        <Box sx={{ m: '1rem 0', display: 'flex', justifyContent: 'center' }}>
          <Face4 sx={{ fontSize: '7rem' }} />
        </Box>

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

      {/* Дело */}
      <Stack spacing={1}>
        <Typography sx={{ color: appColors.sage }} variant='h4'>
          Текущее дело
        </Typography>
        <Typography sx={{ color: appColors.sage }} variant='body1'>
          № 03/10
        </Typography>
      </Stack>

      <Stack
        sx={{
          padding: '1rem',
          backgroundColor: appColors.sage,
          borderRadius: '1rem',
          color: appColors.pine,
        }}
      >
        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
          Название: Исчезновение подарка
        </Typography>

        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
          Статус: Расследование продолжается
        </Typography>

        <Divider sx={{ margin: '0.5rem 0' }} />

        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
          О деле
        </Typography>

        <Typography variant='body2'>
          Подарок бесследно исчез. Обстоятельства происшествия неизвестны. Твоя
          задача — установить, что произошло, найти подарок и раскрыть все
          тайны, связанные с этим делом.
        </Typography>
      </Stack>
    </Stack>
  );
};
