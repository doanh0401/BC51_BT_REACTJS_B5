import  data  from "../../data/DanhSachSV.json"
import { IS_ADD, SET_SELECTED_SV, THEM_SV, UPDATE_SV, XOA_SV } from "../types/SvType";

const DEFAULT_STATE = {
    SvList: data,
    selectedSv: null,
    isAdd: true,
}

const stringtify = localStorage.getItem("SV_LIST");

if(stringtify) {
    DEFAULT_STATE.SvList = JSON.parse(stringtify);
}

export const svReducer = (state = DEFAULT_STATE, action) => { 
    switch (action.type) {
        case THEM_SV:
            
            state.SvList = [...state.SvList,action.payload]

            localStorage.setItem("SV_LIST",JSON.stringify(state.SvList))

            break;

        case SET_SELECTED_SV: {

            state.selectedSv = action.payload[0];

            state.isAdd = action.payload[1];

            break;
        }
        case UPDATE_SV: {
            console.log(action.payload);

            const data = [...state.SvList];

            const index = data.findIndex((element) => {
                return element.MaSv === action.payload.MaSv;
            })

            data[index] = action.payload;

            state.selectedSv = null;

            state.SvList = data;

            localStorage.setItem("SV_LIST",JSON.stringify(state.SvList))

            break;
        }

        case XOA_SV:
            const data = [...state.SvList];

            const index = data.findIndex((element) => {
                return element.MaSv === action.payload.MaSv;
            })

            data.splice(index,1);

            state.SvList = data;

            localStorage.setItem("SV_LIST",JSON.stringify(state.SvList));

            break;
        
        case IS_ADD:

            state.isAdd = action.payload;

            break;
    }

    return {...state}
}