import EditIcon from '@mui/icons-material/Edit';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  Stack,
  TextField,
} from '@mui/material';
import { useState, type FC } from 'react';

import { useGame } from '~/app/context/GameContext';

import { appColors } from '~/shared/colors';
import { CLUE_SOLVED_KEY } from '~/shared/types';

export const InputClueButton: FC = () => {
  const [open, setOpen] = useState(false);
  const { unlockEmail, resetGame } = useGame();

  const handleInputClue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const clue = formData.get('clue')?.toString().trim().toLowerCase();

    if (clue === 'reset') {
      resetGame();
    }

    if (clue === 'ротдевять') {
      unlockEmail(13);
    }

    if (clue === '77 4 5 4 9999') {
      unlockEmail(15);
    }

    if (
      clue === '56,739118 ; 38,856924' ||
      clue === '56,739118; 38,856924' ||
      clue === '56.739118 ; 38.856924' ||
      clue === '56.739118; 38.856924'
    ) {
      unlockEmail(16);
    }

    if (clue === 'плещеевская улица 24' || clue === 'плещеевская улица, 24') {
      unlockEmail(17);
      localStorage.setItem(CLUE_SOLVED_KEY, Date.now().toString());
    }

    setOpen(false);
  };

  return (
    <>
      <Fab
        sx={{
          position: 'fixed',
          bottom: '8rem',
          right: '2rem',
          color: appColors.pine,
          backgroundColor: appColors.sage,

          '&:hover': {
            backgroundColor: appColors.sage,
          },
        }}
        onClick={() => setOpen(true)}
      >
        <EditIcon />
      </Fab>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <Stack
          sx={{
            backgroundColor: appColors.sage,
            color: appColors.pine,
          }}
        >
          <DialogTitle>Новая улика</DialogTitle>

          <DialogContent>
            <DialogContentText>
              Вы расшифровали послание. Введите полученный текст, чтобы добавить
              улику в материалы дела.
            </DialogContentText>

            <form onSubmit={handleInputClue} id='clue-form'>
              <TextField
                autoFocus
                fullWidth
                required
                autoComplete='off'
                color='success'
                id='clue'
                name='clue'
                label='Расшифрованная улика'
                type='text'
                variant='standard'
              />
            </form>
          </DialogContent>

          <DialogActions>
            <Button
              sx={{ color: appColors.pine }}
              onClick={() => setOpen(false)}
            >
              Отмена
            </Button>
            <Button
              sx={{ color: appColors.pine }}
              type='submit'
              form='clue-form'
            >
              Добавить улику
            </Button>
          </DialogActions>
        </Stack>
      </Dialog>
    </>
  );
};
