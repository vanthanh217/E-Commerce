import { Footer, Header } from '@/components/ui';

import { Outlet } from 'react-router';

function ClientLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="min-h-[900px] grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default ClientLayout;
