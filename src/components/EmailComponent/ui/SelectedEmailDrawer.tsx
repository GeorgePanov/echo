import type { FC } from 'react';

import { SwipeableDrawer, Stack, Typography } from '@mui/material';
import { green } from '@mui/material/colors';

type DrawerProps = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export const SelectedEmailDrawer: FC<DrawerProps> = (props) => {
  const { open, setOpen } = props;

  return (
    <SwipeableDrawer
      anchor='right'
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Stack
        spacing={2}
        sx={{
          height: '100%',
          padding: 3,
          backgroundColor: green[900],
        }}
      >
        <Typography sx={{ color: green[100] }} variant='h5'>
          Lorem ipsum dolor sit amet.
        </Typography>

        <Typography
          sx={{ color: green[200] }}
          variant='body2'
          color='text.secondary'
        >
          От: Heinrich
        </Typography>

        <Typography sx={{ color: green[200] }} variant='body1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          doloribus?
        </Typography>
      </Stack>
    </SwipeableDrawer>
  );
};
