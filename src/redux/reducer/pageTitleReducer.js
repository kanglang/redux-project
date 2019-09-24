import { SET_PAGE_TITLE } from '../contants';

const initialTitle = '初始值';
export default function (state = initialTitle, action) {
    switch (action.type) {
        case SET_PAGE_TITLE:
            const infoData = action.data;
            return infoData;
        default:
            return state
    }
}