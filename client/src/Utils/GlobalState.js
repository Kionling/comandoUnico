import React, { createContext, useReducer, useContext } from "react";

import {
  GET_USERS,
  GET_GRUPO,
  GET_ARTISTAS,
  GET_PERFORMANCES,
  UPDATE_PERFORMANCE,
  ADD_PERFORMANCE,
  DELETE_PERFORMANCE,
} from "./actions";

const PerformanceContext = createContext();
const { Provider } = PerformanceContext;

const reducer = (state, action) => {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        users: action.users,
        userId: action.userId,
      };
    }
    case GET_GRUPO: {
      return {
        ...state,
        grupo: action.grupo,
        inviteCode: action.invite_code,
      };
    }
    case GET_ARTISTAS: {
      return {
        ...state,
        artistas: action.artistas,
      };
    }
    case GET_PERFORMANCES: {
      return {
        ...state,
        performances: action.performances,
      };
    }
    case UPDATE_PERFORMANCE: {
      return {
        ...state,
        performances: state.performances.map((performance) => {
          return performance.id !== action.id
            ? performance
            : action.performance;
        }),
      };
    }
    case ADD_PERFORMANCE: {
      return {
        ...state,
        performances: [...state.performances, action.performance],
      };
    }
    case DELETE_PERFORMANCE: {
      return {
        ...state,
        performances: state.performance.filter((performance) => {
          return performance.id !== action.id;
        }),
      };
    }
  }
};

const PerformanceProvider = ({ value: [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    artistas: [],
    performances: [],
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const usePerformanceContext = () => {
  return useContext(PerformanceContext);
};

export { PerformanceProvider, usePerformanceContext };
