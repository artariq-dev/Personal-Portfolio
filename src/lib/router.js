import { createContext, useContext, useEffect, useState } from 'react';

const RouterContext = createContext({
  route: '/',
  navigate: () => {},
});

export function RouterProvider({ children }) {
  const [route, setRoute] = useState('/');

  useEffect(() => {
    const handler = () => {
      setRoute(window.location.hash.replace('#', '') || '/');
    };
    handler();
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const navigate = (path) => {
    window.location.hash = path;
  };

  return (
    <RouterContext.Provider value={{ route, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRoute() {
  return useContext(RouterContext);
}
