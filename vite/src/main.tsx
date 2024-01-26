import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { DojoSetup } from './utils/DojoSetup.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DojoSetup>
        <App />
      </DojoSetup>
      </QueryClientProvider>
  </React.StrictMode>,
)
