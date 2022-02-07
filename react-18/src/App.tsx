import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './components/AppRoutes';
import { Loading } from './components/Loading';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
        {/* Multiple suspense components can be nested */}
        <Suspense fallback={<Loading />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
