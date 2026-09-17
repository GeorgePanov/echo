import type { FC } from 'react';

import { Divider, Stack, Typography } from '@mui/material';
import { green } from '@mui/material/colors';

export const Case: FC = () => {
  return (
    <Stack>
      <Stack spacing={1}>
        <Typography sx={{ color: green[200] }} variant='h4'>
          Дело
        </Typography>
        <Typography sx={{ color: green[200] }} variant='body1'>
          № 03/10
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
        <Typography variant='body1' sx={{ color: green[100] }}>
          Название: Исчезновение подарка
        </Typography>
        <Typography variant='body1' sx={{ color: green[100] }}>
          Статус: Расследование продолжается
        </Typography>

        <Divider sx={{ margin: '0.5rem 0' }} />

        <Typography variant='body1' sx={{ color: green[100] }}>
          О деле
        </Typography>
        <Typography variant='body2' sx={{ color: green[200] }}>
          Подарок бесследно исчез. Обстоятельства происшествия неизвестны. Твоя
          задача — установить, что произошло, найти подарок и раскрыть все
          тайны, связанные с этим делом.
        </Typography>

        <Divider sx={{ margin: '0.5rem 0' }} />

        <Typography variant='body1' sx={{ color: green[100] }}>
          Материалы дела
        </Typography>
        <Typography variant='body2' sx={{ color: green[200] }}>
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

        <Typography variant='body1' sx={{ color: green[100] }}>
          Цель расследования
        </Typography>
        <Typography variant='body2' sx={{ color: green[200] }}>
          - Найти пропавший подарок
          <br />
          - Установить обстоятельства исчезновения
          <br />- Раскрыть личность виновного
        </Typography>

        <Divider sx={{ margin: '0.5rem 0' }} />

        <Typography variant='body1' sx={{ color: green[100] }}>
          Текущий прогресс
        </Typography>
        <Typography variant='body2' sx={{ color: green[200] }}>
          Расследование начато.
          <br />
          Новые материалы будут появляться по мере раскрытия дела.
        </Typography>
      </Stack>
    </Stack>
  );
};
