import { SET_PAGE_TITLE, SET_INFO_LIST} from '../contants'

export function setPageTitleAction(mData) {
    return { type: SET_PAGE_TITLE, data: mData }
}

export function setInfoListAction(mData) {
    return { type: SET_INFO_LIST, data: mData }
}
