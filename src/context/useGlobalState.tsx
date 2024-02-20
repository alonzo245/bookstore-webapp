import React, { useContext, useState } from "react";
import { Book } from "../types";

interface IGlobal {
  books: Book[];
  booksMap: Record<string, Book>;
  catalog: Record<string, Book>;
  setGlobalState?: (updatedState: any) => void;
}

interface IGlobalContext {
  books: Book[];
  booksMap: Record<string, Book>;
  catalog: Record<string, Book>;
  setGlobalState: (updatedState: any) => void;
}

const projectsStateContext = React.createContext<IGlobalContext>({
  books: [],
  booksMap: {},
  catalog: {},
  setGlobalState: () => {},
});

const useGlobalState = () => useContext(projectsStateContext);

const initialState = {
  books: [],
  booksMap: {},
  catalog: {},
  setGlobalState: () => {},
};

const { Provider } = projectsStateContext;

const GlobalStateProvider = ({
  children,
}: {
  children: string | JSX.Element | JSX.Element[];
}) => {
  const [state, setState] = useState<IGlobal>(initialState);

  const setGlobalState = (stateToUpdate: IGlobal) => {
    setState({ ...state, ...stateToUpdate });
  };

  return <Provider value={{ ...state, setGlobalState }}>{children}</Provider>;
};

export { GlobalStateProvider, useGlobalState };
