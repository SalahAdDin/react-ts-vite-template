import { createContext } from "react";

type AppContextProps = {};

const AppContext = createContext<AppContextProps>({});

export type { AppContextProps };
export default AppContext;
