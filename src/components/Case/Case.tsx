import type { FC } from 'react';

import { Divider, Stack, Typography } from '@mui/material';

import { appColors } from '~/shared/colors';

export const Case: FC = () => {
  return (
    <Stack>
      <Stack spacing={1}>
        <Typography sx={{ color: appColors.sage }} variant='h4'>
          Дело
        </Typography>
        <Typography sx={{ color: appColors.sage }} variant='body1'>
          № 03/10
        </Typography>
      </Stack>

      <Stack
        sx={{
          mt: '0.5rem',
          padding: '1rem',
          minHeight: '50vh',
          backgroundColor: appColors.sage,
          borderRadius: '1rem',
        }}
      >
        <Typography
          variant='body1'
          sx={{ color: appColors.pine, fontWeight: 'bold' }}
        >
          Название: Исчезновение подарка
        </Typography>
        <Typography
          variant='body1'
          sx={{ color: appColors.pine, fontWeight: 'bold' }}
        >
          Статус: Расследование продолжается
        </Typography>

        <Divider sx={{ margin: '0.5rem 0' }} />

        <Typography
          variant='body1'
          sx={{ color: appColors.pine, fontWeight: 'bold' }}
        >
          О деле
        </Typography>
        <Typography variant='body2' sx={{ color: appColors.pine }}>
          Подарок бесследно исчез. Обстоятельства происшествия неизвестны. Твоя
          задача — установить, что произошло, найти подарок и раскрыть все
          тайны, связанные с этим делом.
        </Typography>

        <Divider sx={{ margin: '0.5rem 0' }} />

        <Typography
          variant='body1'
          sx={{ color: appColors.pine, fontWeight: 'bold' }}
        >
          Материалы дела
        </Typography>
        <Typography variant='body2' sx={{ color: appColors.pine }}>
          - Улики
          <br />
          - Расшифрованные послания
          <br />
          - Письма
          <br />
          - Свидетельства
          <br />- Дополнительные материалы
        </Typography>

        <Divider sx={{ margin: '0.5rem 0' }} />

        <Typography
          variant='body1'
          sx={{ color: appColors.pine, fontWeight: 'bold' }}
        >
          Цель расследования
        </Typography>
        <Typography variant='body2' sx={{ color: appColors.pine }}>
          - Найти пропавший подарок
          <br />
          - Установить обстоятельства исчезновения
          <br />- Раскрыть личность виновного
        </Typography>

        <Divider sx={{ margin: '0.5rem 0' }} />

        <Typography
          variant='body1'
          sx={{ color: appColors.pine, fontWeight: 'bold' }}
        >
          Текущий прогресс
        </Typography>
        <Typography variant='body2' sx={{ color: appColors.pine }}>
          Расследование начато.
          <br />
          Новые материалы будут появляться по мере раскрытия дела.
        </Typography>
      </Stack>
    </Stack>
  );
};
