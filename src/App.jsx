import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login';
import Dashboard from './contents/Dashboard';
import Header from './components/Header';
import Redirect from './contents/Redirect';

function LoginRoute({ children }) {
  const { user } = useAuth();
  return user ? <Navigate to="/" /> : children;
}

function ProtectedRoute({ children }) {
  const { user } = useA]Th();
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element= {
            <LoginRoute>
              <Login />
            </LoginRoute>
          } />
          <Route path="/" element= {
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/r/:shortId" element=<Redirect /> />
          <Route path="*" element=<Navigate to="/" /> />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;