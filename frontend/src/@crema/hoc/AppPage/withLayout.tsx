import React, {useEffect} from 'react';
import Layouts from '../../core/AppLayout/Layouts';
import {
  useLayoutActionsContext,
  useLayoutContext,
} from '../../utility/AppContextProvider/LayoutContextProvider';
import {useSidebarActionsContext} from '../../utility/AppContextProvider/SidebarContextProvider';
import {useRouter} from 'next/router';

const withLayout = (ComposedComponent) => (props) => {
  const {navStyle} = useLayoutContext();
  const AppLayout = Layouts[navStyle];

  const {updateNavStyle} = useLayoutActionsContext();
  const {updateMenuStyle, setSidebarBgImage} = useSidebarActionsContext();
  const router = useRouter();

  useEffect(() => {
    if (router.query.layout) updateNavStyle(router.query.layout as string);
    if (router.query.menuStyle)
      updateMenuStyle(router.query.menuStyle as string);
    if (router.query.sidebarImage) setSidebarBgImage(true);
  }, [setSidebarBgImage, updateNavStyle, updateMenuStyle]);

  return (
    <AppLayout>
      <ComposedComponent {...props} />
    </AppLayout>
  );
};

export default withLayout;
