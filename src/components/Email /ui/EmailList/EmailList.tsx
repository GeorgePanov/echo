import type { FC } from 'react';

import { List, Typography } from '@mui/material';

import { appColors } from '~/shared/colors';
import { useGetEmails } from '~/shared/hooks/useGetEmails';
import type { emailType } from '~/shared/types';

import { EmailItem } from './EmailItem';

type EmailListProps = {
  handleSelectEmail: (v: emailType['emailId']) => void;
};

export const EmailList: FC<EmailListProps> = (props) => {
  const { handleSelectEmail } = props;

  const { filteredEmails } = useGetEmails();

  return (
    <>
      <Typography variant='body1' sx={{ color: appColors.secondary }}>
        Писем: {filteredEmails.length}
      </Typography>

      <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {filteredEmails.map((email) => (
          <EmailItem
            key={email.emailId}
            email={email}
            handleSelectEmail={handleSelectEmail}
          />
        ))}
      </List>
    </>
  );
};
