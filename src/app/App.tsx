import type { FC } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

import { AppLayout } from '~/components/AppLayout';
import { Case } from '~/components/Case';
import { Email } from '~/components/Email ';
import { Profile } from '~/components/Profile';

import { ROUTE_PATH } from '~/shared/types';

import { GameProvider } from './context/GameContext';

export const App: FC = () => {
  return (
    <GameProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path={ROUTE_PATH.MAIN} element={<Email />} />
            <Route path={ROUTE_PATH.CASE} element={<Case />} />
            <Route path={ROUTE_PATH.PROFILE} element={<Profile />} />
          </Route>

          <Route path='*' element={<Navigate to={ROUTE_PATH.MAIN} replace />} />
        </Routes>
      </BrowserRouter>
    </GameProvider>
  );
};
