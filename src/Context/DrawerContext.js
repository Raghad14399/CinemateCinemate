import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();

function DrawerContext({ children }) {
  const [mobileDrawer, setMobileDrawer] = useState(false);
  const toggleDrawer = () => setMobileDrawer(!mobileDrawer);

  // إزالة useMemo لأنها ليست ضرورية هنا
  const value = { mobileDrawer, toggleDrawer };

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
}

export default DrawerContext;