import type { FC } from 'react';

import {
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Box,
  Stack,
} from '@mui/material';

import { appColors } from '~/shared/colors';
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
    <ListItem disablePadding>
      <ListItemButton
        sx={{
          borderRadius: '1rem',
          backgroundColor: appColors.sage,

          '&:hover': {
            backgroundColor: appColors.sage,
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
            <Typography
              sx={{
                fontWeight: 'bold',
                color: appColors.pine,
              }}
              noWrap
            >
              {author}
            </Typography>
          }
          secondary={
            <Stack sx={{ color: appColors.pine }}>
              <Typography variant='body2' noWrap>
                {title}
              </Typography>

              <Typography variant='body2' noWrap>
                {message}
              </Typography>
            </Stack>
          }
        />

        <Box
          sx={{
            marginLeft: 1,
            width: 8,
            height: 8,
            borderRadius: '50%',
            ...(!isRead && { bgcolor: appColors.nightForest }),
            flexShrink: 0,
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};
