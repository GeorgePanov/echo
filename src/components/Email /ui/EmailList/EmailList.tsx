import type { FC } from 'react';

import { List } from '@mui/material';

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
    <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {filteredEmails.map((email) => (
        <EmailItem
          key={email.emailId}
          email={email}
          handleSelectEmail={handleSelectEmail}
        />
      ))}
    </List>
  );
};
