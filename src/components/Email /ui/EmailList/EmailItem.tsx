import type { FC } from 'react';

import {
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Box,
} from '@mui/material';
import { green } from '@mui/material/colors';

import { stringAvatar } from '~/shared/stringAvatar';
import type { emailType } from '~/shared/types';

type EmailItemProps = {
  email: emailType;
  handleSelectEmail: (v: emailType['emailId']) => void;
};

export const EmailItem: FC<EmailItemProps> = (props) => {
  const { email, handleSelectEmail } = props;
  const { emailId, isRead, author, title, message } = email;

  return (
    <ListItem key={title} disablePadding>
      <ListItemButton
        sx={{
          borderRadius: '1rem',
          backgroundColor: green[800],

          '&:hover': {
            backgroundColor: green[800],
          },
        }}
        onClick={() => handleSelectEmail(emailId)}
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
  );
};
