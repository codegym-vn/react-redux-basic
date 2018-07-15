export const DATA_AVAILABLE = 'DATA_AVAILABLE';
import Data from '../instructions.json';

export function getData(){
    return (dispatch) => {
        setTimeout(() => {
            var data  = Data.instructions;
            dispatch({type: DATA_AVAILABLE, data:data});
        }, 2000);

    };
}