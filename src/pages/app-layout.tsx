import { Outlet } from 'react-router-dom';

import { PersistentDrawerLeft } from '@/widgets/AppBar/Drawer';
import { Footer } from '@/widgets/Footer/Footer';
// import ComponentWithProblem from '../@components/WDYR/ComponentWithProblem';

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
