import type { FC } from 'react';

import { Email, FolderCopy } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Badge,
} from '@mui/material';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router';

import { ROUTE_PATH } from '../shared/types';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        // bgcolor: 'background.default',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          // maxWidth: MAX_WIDTH,
          minHeight: '100vh',
          borderLeft: '1px solid',
          borderRight: '1px solid',
          borderColor: 'divider',
          pb: 9,
        }}
      >
        {children}

        <BottomNavigation
          value={location.pathname}
          onChange={(_, v) => navigate(v)}
          showLabels
          sx={{
            position: 'fixed',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            // maxWidth: MAX_WIDTH,
            borderTop: '1px solid',
            // borderColor: 'divider',
            // bgcolor: 'background.paper',
            zIndex: 20,
          }}
        >
          <BottomNavigationAction
            label='Почта'
            value={ROUTE_PATH.EMAIL}
            icon={
              <Badge
                badgeContent={true}
                color='info'
                // max={maxVisibleNotifications}
              >
                <Email />
              </Badge>
            }
          />
          <BottomNavigationAction
            label='Дело'
            value={ROUTE_PATH.CASE}
            icon={<FolderCopy />}
          />
          <BottomNavigationAction
            label='Профиль'
            value={ROUTE_PATH.PROFILE}
            icon={<PersonIcon />}
          />
        </BottomNavigation>
      </Box>
    </Box>
  );
};

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTE_PATH.EMAIL} element={<>email</>} />
          <Route path={ROUTE_PATH.EMAIL_ID} element={<>email:id</>} />
          <Route path={ROUTE_PATH.CASE} element={<>case</>} />
          <Route path={ROUTE_PATH.PROFILE} element={<>profile</>} />
          <Route
            path='*'
            element={<Navigate to={ROUTE_PATH.EMAIL} replace />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
