import { BrowserRouter, Navigate, Route, Routes as RoutesWrapper } from 'react-router-dom';
import { Routes } from './constants/routes';
import { AppLayout } from '../layout/AppLayout';
import { Launches } from '../pages/Launches';
import { AuthLayout } from '../layout/AuthLayout';

export const Router = () => (
  <BrowserRouter>
    <RoutesWrapper>
      <Route element={<AppLayout />}>
        <Route path={Routes.Launches} element={<Launches />} />
      </Route>
      <Route path={Routes.Login} element={<AuthLayout />}>
        <Route index element={<Launches />} />
      </Route>
      <Route
        path="*"
        element={<Navigate to={Routes.Launches} />}
      />
    </RoutesWrapper>
  </BrowserRouter>
);
