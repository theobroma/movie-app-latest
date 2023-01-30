import { Outlet } from 'react-router-dom';

// import ComponentWithProblem from '@/entities/media/ui/WDYR/ComponentWithProblem';
import { PersistentDrawerLeft } from '@/widgets/AppBar/Drawer';
import { Footer } from '@/widgets/Footer/Footer';

const AppLayout = () => (
  <div className="HolyGrail">
    <PersistentDrawerLeft>
      <Outlet />
    </PersistentDrawerLeft>
    {/* Test WDYR */}
    {/* <ComponentWithProblem /> */}
    <Footer />
  </div>
);

// eslint-disable-next-line import/no-default-export
export default AppLayout;
