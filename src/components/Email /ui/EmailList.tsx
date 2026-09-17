import type { FC } from 'react';

import {
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Box,
} from '@mui/material';
import { green } from '@mui/material/colors';

import { mocksEmails } from '~/shared/api/mocksEmails';
import { stringAvatar } from '~/shared/stringAvatar';

type EmailListProps = {
  setOpen: (v: boolean) => void;
};

export const EmailList: FC<EmailListProps> = (props) => {
  const { setOpen } = props;

  return (
    <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {mocksEmails.map(({ author, title, message, isRead }) => (
        <ListItem key={title} disablePadding>
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
              <Avatar {...stringAvatar(author)} />
            </ListItemAvatar>

            <ListItemText
              disableTypography
              primary={
                <Typography sx={{ color: green[100] }} noWrap>
                  {author}
                </Typography>
              }
              secondary={
                <>
                  <Typography sx={{ color: green[200] }} variant='body2' noWrap>
                    {title}
                  </Typography>

                  <Typography sx={{ color: green[200] }} variant='body2' noWrap>
                    {message}
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
                ...(!isRead && { bgcolor: green[100] }),
                flexShrink: 0,
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
