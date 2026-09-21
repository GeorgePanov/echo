/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type FC,
  type ReactNode,
} from 'react';

import type { emailType } from '~/shared/types';

type GameState = {
  lockedEmails: emailType['emailId'][];
  unReadEmails: emailType['emailId'][];
};

type GameContextType = {
  gameState: GameState;
  unlockEmail: (emailId: number) => void;
  markEmailAsRead: (emailId: number) => void;
  resetGame: () => void;
};

const STORAGE_KEY = 'detective-game';

const initialGameState: GameState = {
  lockedEmails: [13, 14, 15],
  unReadEmails: [13, 14, 15],
};

const GameContext = createContext<GameContextType | null>(null);

export const GameProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState<GameState>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return initialGameState;
    }

    try {
      return JSON.parse(saved);
    } catch {
      return initialGameState;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
  }, [gameState]);

  const unlockEmail = (emailId: number) => {
    setGameState((prev) => ({
      ...prev,
      lockedEmails: prev.lockedEmails.filter((id) => id !== emailId),
    }));
  };

  const markEmailAsRead = (emailId: number) => {
    setGameState((prev) => ({
      ...prev,
      unReadEmails: prev.unReadEmails.filter((id) => id !== emailId),
    }));
  };

  const resetGame = () => {
    setGameState(initialGameState);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <GameContext.Provider
      value={{
        gameState,
        unlockEmail,
        markEmailAsRead,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('useGame must be used inside GameProvider');
  }

  return context;
};
