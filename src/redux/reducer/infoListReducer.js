import { SET_INFO_LIST} from '../contants';
const initialList ={
    user: [
        {
            id: "0",
            name: "我是老大",
            age: "30岁"
        },
        {
            id: "1",
            name: "我是老二",
            age: "29岁"
        },
        {
            id: "2",
            name: "我是老三",
            age: "28岁"
        },
        {
            id: "3",
            name: "我是老四",
            age: "27岁"
        }]
} 
// 一个reducer就是一个函数
export default function (state = initialList, action) {
    // 不同的action有不同的处理逻辑
    switch (action.type) {
        case SET_INFO_LIST:
            return {
                ...state,
                user: [...state.user, action.data]
            }
        default:
            return state
    }
}