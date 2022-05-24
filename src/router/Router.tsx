import {
  BrowserRouter, Navigate, Route, Routes as RoutesWrapper,
} from 'react-router-dom';
import { Routes } from './constants/routes';
import { AppLayout } from '../layout/AppLayout';
import { Home } from '../pages/Home';
// import { AuthLayout } from '../layout/AuthLayout';

export const Router = () => (
  <BrowserRouter>
    <RoutesWrapper>
      <Route element={<AppLayout />}>
        <Route path={Routes.Dashboard} element={<Home />} />
      </Route>
      <Route
        path="*"
        element={<Navigate to={Routes.Dashboard} />}
      />
    </RoutesWrapper>
  </BrowserRouter>
);
