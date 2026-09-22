import { Stack, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { type FC, useState } from 'react';

import { useGame } from '~/app/context/GameContext';

import type { emailType } from '~/shared/types';

import { EmailList, InputClueButton, SelectedEmailDrawer } from './ui';

export const Email: FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedEmailId, setSelectedEmailId] = useState<
    emailType['emailId'] | null
  >(null);

  const { markEmailAsRead } = useGame();

  const handleSelectEmail = (id: number) => {
    setSelectedEmailId(id);
    setOpen(true);
    markEmailAsRead(id);
  };

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

      <EmailList handleSelectEmail={handleSelectEmail} />

      <InputClueButton />

      <SelectedEmailDrawer
        selectedEmailId={selectedEmailId}
        open={open}
        setOpen={setOpen}
      />
    </Stack>
  );
};
