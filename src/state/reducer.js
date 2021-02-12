import {
    useReducer
} from 'react';

import { MultipleSelectActions } from './actions';
/**
 * MultipleSelectReducer
 * @returns {[{
 * }},
 * React.DispatchWithoutAction
 * ]}
 */
export const MultipleSelectReducer = () => {
    const [state, dispatch] = useReducer(MultipleSelectActions, {
        searchValue: '',
        initOptions: [],
        searchOptionResult: []
    });

    return [state, dispatch];
}