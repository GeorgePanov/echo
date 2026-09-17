import type { FC } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

import { AppLayout } from '../components/AppLayout';
import { EmailComponent } from '../components/EmailComponent';
import { ROUTE_PATH } from '../shared/types';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={ROUTE_PATH.EMAIL} element={<EmailComponent />} />
          <Route path={ROUTE_PATH.CASE} element={<>case</>} />
          <Route path={ROUTE_PATH.PROFILE} element={<>profile</>} />
        </Route>

        <Route path='*' element={<Navigate to={ROUTE_PATH.EMAIL} replace />} />
      </Routes>
    </BrowserRouter>
  );
};
