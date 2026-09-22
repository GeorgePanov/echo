import { Stack, Typography } from '@mui/material';
import { type FC, useEffect, useState } from 'react';

import { useGame } from '~/app/context/GameContext';

import { appColors } from '~/shared/colors';
import { CLUE_SOLVED_KEY, type emailType } from '~/shared/types';

import { EmailList, InputClueButton, SelectedEmailDrawer } from './ui';

export const Email: FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedEmailId, setSelectedEmailId] = useState<
    emailType['emailId'] | null
  >(null);

  const { unlockEmail, markEmailAsRead } = useGame();

  const handleSelectEmail = (id: number) => {
    setSelectedEmailId(id);
    setOpen(true);
    markEmailAsRead(id);

    if (id === 13) {
      setTimeout(() => unlockEmail(14), 5000);
      return;
    }
  };

  useEffect(() => {
    const solvedTime = localStorage.getItem(CLUE_SOLVED_KEY);
    if (!solvedTime) return;

    // Через 20 минут разблокировать Email
    if (Date.now() - Number(solvedTime) >= 20 * 60 * 1000) {
      unlockEmail(18);
      localStorage.removeItem(CLUE_SOLVED_KEY);
    }
  }, [unlockEmail]);

  return (
    <Stack>
      <Stack spacing={1} sx={{ color: appColors.sage }}>
        <Typography variant='h4'>Почта</Typography>
        <Typography variant='body1'>Входящие</Typography>
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
