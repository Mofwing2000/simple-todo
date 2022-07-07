import { useReducer } from 'react';
import Context from '../Context';
import reducer, { taskList } from '../store/reducer';

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, taskList);

    return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

export default ContextProvider;
