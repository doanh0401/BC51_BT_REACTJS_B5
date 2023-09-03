import { IS_ADD, SET_SELECTED_SV, THEM_SV, UPDATE_SV, XOA_SV } from "../types/SvType";

export const themSvAction = (data) => {
    return {
        type: THEM_SV,
        payload: data,
    };
}

export const xoaSvAction = (data) => {
    return {
        type: XOA_SV,
        payload: data,
    };
}

export const setSelectedSvAction = (data) => {
    return {
        type: SET_SELECTED_SV,
        payload: data
    }
}

export const updateSvAction = (data) => {
    return {
        type: UPDATE_SV,
        payload: data
    }
}

export const isAddAction = (data) => {
    return {
        type: IS_ADD,
        payload: data
    }
}

