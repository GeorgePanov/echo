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
} from '@mui/material';
import { green } from '@mui/material/colors';
import { type FC, useState } from 'react';

import { stringAvatar } from '~/shared/stringAvatar';

import { Drawer } from './ui/Drawer';

export const EmailComponent: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack>
      <Stack spacing={1}>
        <Typography sx={{ color: green[200] }} variant='h4'>
          Почта
        </Typography>
        <Typography sx={{ color: green[200] }} variant='body1'>
          Входящие
        </Typography>
      </Stack>

      <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {[...Array(12)].map((_, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: '1rem',
                backgroundColor: green[800],

                '&:hover': {
                  backgroundColor: green[800],
                },
              }}
              onClick={() => setOpen(true)}
            >
              <ListItemAvatar>
                <Avatar {...stringAvatar('Kent Dodds')} />
              </ListItemAvatar>

              <ListItemText
                disableTypography
                primary={
                  <Typography sx={{ color: green[100] }} noWrap>
                    Lorem ipsum dolor sit amet.
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      sx={{ color: green[200] }}
                      variant='body2'
                      noWrap
                    >
                      Lorem ipsum
                    </Typography>

                    <Typography
                      sx={{ color: green[200] }}
                      variant='body2'
                      noWrap
                    >
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
                  bgcolor: green[100],
                  flexShrink: 0,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Drawer open={open} setOpen={setOpen} />
    </Stack>
  );
};
