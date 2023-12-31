import React from 'react';
import './App.css';
import PageLayout from './layout/PageLayout';
import SearchPage from './pages/SearchPage';
import SearchResultPage from './pages/SearchResultPage';
import SignUpPage from './pages/SignUpPage';
import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import MyPage from './pages/MyPage';
import CustomPostPage from './pages/CustomPostPage';
import CustomDetail from './pages/CustomDetail';
import CaptureGuidePage from './pages/CaptureGuidePage';
import CameraPage from './pages/CameraPage';
import CameraOptionPage from './pages/CameraOptionPage';


import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<CustomPostPage />} />
        <Route path="/post/:id" element={<CustomDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/camera/guide" element={<CaptureGuidePage />} />
        <Route path="/camera/capture" element={<CameraPage />} />
        <Route path="/camera/capture/option" element={<CameraOptionPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/searchresult" element={<SearchResultPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
};

export default App;