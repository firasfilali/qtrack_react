export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export function setCurrentPage(pageName) {
    return {
        type: SET_CURRENT_PAGE,
        payload: pageName
    };
}