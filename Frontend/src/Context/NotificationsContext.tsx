import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface NotificationsProvider {
  Notifications: Notification[];
  PushNotification: (message: string, bgColor: "bg-success" | "bg-error" | "bg-info") => void;
}
interface Notification {
  message: string;
  bgColor: "bg-success" | "bg-error" | "bg-info";
}

interface NotificationsProviderProps {
  children: ReactNode;
}

const NotificationsProvider = createContext({} as NotificationsProvider);

export const useNotificationsInfo = () => {
  return useContext(NotificationsProvider);
};

export const NotificationsContext = ({ children }: NotificationsProviderProps) => {
  const [Notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    if (Notifications.length > 0) {
      const interval = setInterval(() => {
        RemoveFirstElement();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [Notifications.length]);
  const PushNotification = (message: string, bgColor: "bg-success" | "bg-error" | "bg-info") => {
    setNotifications((prevState) => [...prevState, { message, bgColor }]);
  };
  const RemoveFirstElement = () => {
    setNotifications(Notifications.slice(0, -1));
  };
  return <NotificationsProvider.Provider value={{ Notifications, PushNotification }}>{children}</NotificationsProvider.Provider>;
};
