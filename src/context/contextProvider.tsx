import { createContext, useState, useCallback, ReactNode } from "react";
import { appValues } from "models/appValues";

type ValuesAppContextType = {
  appValues: appValues;
  updateAppValues: (newState: appValues) => void;
  // setIsSubstitution: (newState: boolean) => void;
  // isSubstitution: boolean;
  // setPreviousPage: (newState: string) => void;
  // previousPage: string;
  // setPage: (newState: string) => void;
  // page: string;
};

type Props = {
  children: ReactNode;
};

const initialState = {
  appValues: {},
  updateAppValues: () => undefined,
  // setIsSubstitution: () => undefined,
  // isSubstitution: false,
  // setPreviousPage: () => undefined,
  // previousPage: "",
  // setPage: () => undefined,
  // page: "",
};

export const ValuesAppContext =
  createContext<ValuesAppContextType>(initialState);

export const AppContextProvider = ({ children }: Props) => {
  const initialValues: appValues = {
    identify: "",
    plan: "",
    expertise: "",
    dentistName: "",
    cro: "",
    state: "",
    city: "",
    neighborhood: "",
    cep: "",
  };

  const [appValues, setAppValues] = useState<appValues>(initialValues);

  const updateAppValues = useCallback((data: any) => {
    setAppValues(data);
  }, []);

  return (
    <ValuesAppContext.Provider
      value={{
        appValues,
        updateAppValues,
      }}
    >
      {children}
    </ValuesAppContext.Provider>
  );
};
