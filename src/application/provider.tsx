import { FC, ReactNode, useMemo } from "react";

import AppContext from "./context";

const AppProvider: FC<{ children?: ReactNode }> = ({ children = "" }) => {
  // const [state, setState] = useState();
  const memo = useMemo(() => ({}), []);
  return <AppContext.Provider value={memo}>{children}</AppContext.Provider>;
};

export default AppProvider;
