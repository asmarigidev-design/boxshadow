import React, { useContext, useState } from 'react';

// ایجاد کانتکست برای مدیریت وضعیت / Create context for state management
const AppContext = React.createContext();

// فراهم‌کننده کانتکست برای اجزای داخلی / Context provider for inner components
const AppProvider = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  // تابع باز کردن سایدبار / Function to open sidebar
  const openSidebar = () => {
    setIsOpenSidebar(true);
  };

  // تابع بستن سایدبار / Function to close sidebar
  const closeSidebar = () => {
    setIsOpenSidebar(false);
  };

  return (
    <AppContext.Provider value={{ isOpenSidebar, openSidebar, closeSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

// استفاده از کانتکست در اجزای دیگر / Use context in other components
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
