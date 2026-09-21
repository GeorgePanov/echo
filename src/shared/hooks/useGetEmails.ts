import { useGame } from '~/app/context/GameContext';

import { mocksEmails } from '../api/mocksEmails';

export const useGetEmails = () => {
  const { gameState } = useGame();

  const filteredEmails = mocksEmails
    .filter((email) => !gameState.lockedEmails.includes(email.emailId))
    .map((email) => ({
      ...email,
      isRead: !gameState.unReadEmails.includes(email.emailId),
    }));

  return { filteredEmails };
};
