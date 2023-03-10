import { createContext, useState, useCallback, ReactNode } from "react";
import { appValues } from "models/appValues";

type ValuesAppContextType = {
  appValues: appValues;
  updateAppValues: (newState: appValues) => void;
  arrayAppValues: appValues[];
  updateArrayAppValues: (newState: appValues) => void;
};

type Props = {
  children: ReactNode;
};

const initialState = {
  appValues: {},
  updateAppValues: () => undefined,
  arrayAppValues: [],
  updateArrayAppValues: () => undefined,
};

export const ValuesAppContext =
  createContext<ValuesAppContextType>(initialState);

export const AppContextProvider = ({ children }: Props) => {
  const initialValues: appValues = {
    subject: "",
    startClasses: "",
    finishClasses: "",
    amountDaysClasses: "",
    amountAbsence: "",
    radioholiday: "Não",
    holiday: "",
    radioPct: "Sim",
    percentage: "",
  };
  const initialArrayValue = [{}];

  const [appValues, setAppValues] = useState<appValues>(initialValues);
  const [arrayAppValues, setArrayAppValues] =
    useState<appValues[]>(initialArrayValue);

  const updateAppValues = useCallback((data: any) => {
    setAppValues(data);
  }, []);

  const updateArrayAppValues = useCallback((data: any) => {
    setArrayAppValues(data);
  }, []);

  return (
    <ValuesAppContext.Provider
      value={{
        appValues,
        updateAppValues,
        arrayAppValues,
        updateArrayAppValues,
      }}
    >
      {children}
    </ValuesAppContext.Provider>
  );
};
