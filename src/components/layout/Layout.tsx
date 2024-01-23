import { ReactNode, createContext, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import styles from "./Layout.module.sass";
import Header from "../header/Header";

export const SidebarContext = createContext<{
  isOpen: boolean;
  toggle: () => void;
}>({
  isOpen: false,
  toggle: () => null,
});

export default function Layout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <SidebarContext.Provider
      value={{
        isOpen: isSidebarOpen,
        toggle: () => setSidebarOpen(!isSidebarOpen),
      }}
    >
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.page}>
          <Header />
          {children}
        </div>
      </div>
    </SidebarContext.Provider>
  );
}
