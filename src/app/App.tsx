import type { FC } from 'react';

import { Email } from '@mui/icons-material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

import { AppLayout } from '~/components/AppLayout';
import { Case } from '~/components/Case';
import { Profile } from '~/components/Profile';

import { ROUTE_PATH } from '~/shared/types';

export const App: FC = () => {
  return (
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
  );
};
