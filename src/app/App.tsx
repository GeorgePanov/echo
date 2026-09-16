import { Email, FolderCopy } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import {
  BottomNavigation,
  BottomNavigationAction,
  Badge,
  Container,
  Stack,
  List,
  ListItem,
  Typography,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
  SwipeableDrawer,
  Box,
} from '@mui/material';
import { useState, type FC } from 'react';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router';

import { stringAvatar } from '../shared/stringAvatar';
import { ROUTE_PATH } from '../shared/types';

const AppLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container
      sx={{
        minHeight: '100vh',
        maxWidth: '600px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Stack sx={{ width: '100%' }}>
        <Outlet />

        <BottomNavigation
          value={location.pathname}
          onChange={(_, v) => navigate(v)}
          // showLabels
          sx={{
            position: 'fixed',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'divider',
            // bgcolor: 'background.paper',
            // zIndex: 20,
          }}
        >
          <BottomNavigationAction
            label='Почта'
            value={ROUTE_PATH.EMAIL}
            icon={
              <Badge
                color='info'
                // badgeContent={true}
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
      </Stack>
    </Container>
  );
};

const EmailComponent: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack>
      <Stack spacing={1}>
        <Typography variant='h2'>Почта</Typography>
        <Typography variant='body1'>Входящие</Typography>
      </Stack>

      <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {[...Array(12)].map((_, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: '1rem',
                backgroundColor: 'lightgray',

                '&:hover': {
                  backgroundColor: 'lightgray',
                },
              }}
              onClick={() => setOpen(true)}
            >
              <ListItemAvatar>
                <Avatar {...stringAvatar('Kent Dodds')} />
              </ListItemAvatar>

              <ListItemText
                primary='Lorem ipsum dolor sit amet.'
                secondary={
                  <>
                    <Typography variant='subtitle1' noWrap>
                      Lorem ipsum
                    </Typography>
                    <Typography variant='subtitle2' noWrap>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur minus animi delectus porro quos laboriosam
                      provident iure, aspernatur numquam officia?
                    </Typography>
                  </>
                }
              />

              <Box
                sx={{
                  marginLeft: 1,
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  flexShrink: 0,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <SwipeableDrawer
        anchor='right'
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Stack spacing={2} sx={{ padding: 3 }}>
          <Typography variant='h5'>Lorem ipsum dolor sit amet.</Typography>

          <Typography variant='body2' color='text.secondary'>
            От: Heinrich
          </Typography>

          <Typography variant='body1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            doloribus?
          </Typography>
        </Stack>
      </SwipeableDrawer>
    </Stack>
  );
};

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
