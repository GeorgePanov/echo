import {
  Stack,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box,
  SwipeableDrawer,
} from '@mui/material';
import { type FC, useState } from 'react';

import { stringAvatar } from '~/shared/stringAvatar';

export const EmailComponent: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack>
      <Stack spacing={1}>
        <Typography variant='h4'>Почта</Typography>
        <Typography variant='body1'>Входящие</Typography>
      </Stack>

      <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {[...Array(12)].map((_, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: '1rem',
                backgroundColor: 'lightgray',

                '&:hover': {
                  backgroundColor: 'lightgray',
                },
              }}
              onClick={() => setOpen(true)}
            >
              <ListItemAvatar>
                <Avatar {...stringAvatar('Kent Dodds')} />
              </ListItemAvatar>

              <ListItemText
                primary='Lorem ipsum dolor sit amet.'
                secondary={
                  <>
                    <Typography variant='subtitle1' noWrap>
                      Lorem ipsum
                    </Typography>
                    <Typography variant='subtitle2' noWrap>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur minus animi delectus porro quos laboriosam
                      provident iure, aspernatur numquam officia?
                    </Typography>
                  </>
                }
              />

              <Box
                sx={{
                  marginLeft: 1,
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  flexShrink: 0,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <SwipeableDrawer
        anchor='right'
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Stack spacing={2} sx={{ padding: 3 }}>
          <Typography variant='h5'>Lorem ipsum dolor sit amet.</Typography>

          <Typography variant='body2' color='text.secondary'>
            От: Heinrich
          </Typography>

          <Typography variant='body1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            doloribus?
          </Typography>
        </Stack>
      </SwipeableDrawer>
    </Stack>
  );
};
