import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route } from 'react-router-dom';

import 'nprogress/nprogress.css';
import App from '@/App';
import { SidebarProvider } from '@/contexts/SidebarContext';
import * as serviceWorker from '@/serviceWorker';
import ProtectedRoutes from './services/auth/ProtectedRoutes';

ReactDOM.render(
  <HelmetProvider>
    <SidebarProvider>
      <BrowserRouter>
        {/* <ProtectedRoutes> */}
          <App />
        {/* </ProtectedRoutes> */}
      </BrowserRouter>
    </SidebarProvider>
  </HelmetProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
