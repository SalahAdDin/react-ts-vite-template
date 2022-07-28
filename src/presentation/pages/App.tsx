import './App.css';

import AppProvider from '@application/provider';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '@presentation/components/Layout';
import LoadingWidget from '@presentation/components/LoadingWidget';

const App = () => (
  <Suspense fallback={<LoadingWidget />}>
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={} />
            <Route path="/" element={} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  </Suspense>
);

export default App;
