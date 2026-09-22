import EditIcon from '@mui/icons-material/Edit';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  TextField,
} from '@mui/material';
import { green } from '@mui/material/colors';
import { useState, type FC } from 'react';

import { useGame } from '~/app/context/GameContext';

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

    if (clue === '56,739118, 38,856924') {
      unlockEmail(16);
    }

    if (clue === 'плещеевская улица 24') {
      unlockEmail(17);
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
          color: green[700],
          backgroundColor: green[200],

          '&:hover': {
            backgroundColor: green[200],
          },
        }}
        onClick={() => setOpen(true)}
      >
        <EditIcon />
      </Fab>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Новая улика</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Вы расшифровали послание. Введите полученный текст, чтобы добавить
            улику в материалы дела.
          </DialogContentText>

          <form onSubmit={handleInputClue} id='clue-form'>
            <TextField
              color='success'
              autoFocus
              required
              id='clue'
              name='clue'
              label='Расшифрованная улика'
              type='text'
              fullWidth
              variant='standard'
            />
          </form>
        </DialogContent>

        <DialogActions>
          <Button sx={{ color: green[800] }} onClick={() => setOpen(false)}>
            Отмена
          </Button>
          <Button sx={{ color: green[800] }} type='submit' form='clue-form'>
            Добавить улику
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
