import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <BrowserRouter>
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'lightgray' }}>
          <App />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  </QueryClientProvider>
);
