import EditIcon from '@mui/icons-material/Edit';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  Snackbar,
  Stack,
  TextField,
} from '@mui/material';
import { useState, type FC } from 'react';

import { useGame } from '~/app/context/GameContext';

import { appColors } from '~/shared/colors';
import { CLUE_SOLVED_KEY } from '~/shared/types';

const CLUES: Record<string, number> = {
  ротдевять: 13,
  '774549999': 15,
  '5673911838856924': 16,
  плещеевскаяулица24: 17,
  //
  clue13: 13,
  clue14: 14,
  clue15: 15,
  clue16: 16,
  clue17: 17,
  clue18: 18,
};

const normalizeClue = (value: string) =>
  value.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');

export const InputClueButton: FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isCorrectClue, setIsCorrectClue] = useState(false);

  const { unlockEmail, resetGame } = useGame();

  const handleInputClue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const rawClue = formData.get('clue')?.toString() ?? '';
    const clue = normalizeClue(rawClue);

    if (clue === 'reset') {
      resetGame();
      setDialogOpen(false);
      return;
    }

    const emailId = CLUES[clue];

    if (emailId) {
      unlockEmail(emailId);
      if (emailId === 17) {
        localStorage.setItem(CLUE_SOLVED_KEY, Date.now().toString());
      }

      setIsCorrectClue(true);
    } else {
      setIsCorrectClue(false);
    }

    setDialogOpen(false);
    setSnackbarOpen(true);
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
        onClick={() => setDialogOpen(true)}
      >
        <EditIcon />
      </Fab>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
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
              onClick={() => setDialogOpen(false)}
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

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        message={
          isCorrectClue
            ? 'Удалось проанализировать! Вы получили новое сообщение'
            : 'Не удалось проанализировать'
        }
      />
    </>
  );
};
