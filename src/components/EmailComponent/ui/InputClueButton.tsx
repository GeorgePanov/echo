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

export const InputClueButton: FC = () => {
  const [open, setOpen] = useState(false);
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

          <form onSubmit={() => setOpen(false)} id='clue-form'>
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
