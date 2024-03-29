import { createContext, useReducer } from "react"

const initialState = {
    items : [],
    totalAmount : 0
}

const itemReducer = (state, action) => {
    if (action.type === "ADD_ITEM"){
        const updatedTotalAmount = 
            state.totalAmount + action.item.amount * action.item.price;
        const itemExistIndex = state.items.findIndex(item => item.id === action.item.id);

        const foundItem = state.items[itemExistIndex];

        let updatedData;
        if (foundItem){
            const updatedItem = {
                ...foundItem,
                amount: foundItem.amount + action.item.amount
            }
            updatedData = [...state.items];
            updatedData[itemExistIndex] = updatedItem;
        }
        else{
            updatedData = state.items.concat(action.item);
        }
        
        return{
            items : updatedData,
            totalAmount : updatedTotalAmount
        };
    }
    if (action.type==="REMOVE_ITEM"){
        const existItemIndex = state.items.findIndex(item => item.id===action.id)

        const existItem = state.items[existItemIndex];

        const updatedTotalAmount =  
            state.totalAmount - existItem.price;
            
        let updatedItems;
        if(existItem.amount === 1){
            updatedItems = state.items.filter(item => item.id !== action.id)
        }
        else{
            const updatedItem = {...existItem, amount : existItem.amount - 1}
            updatedItems = [...state.items]
            updatedItems[existItemIndex] = updatedItem;
        }
        return {
            items : updatedItems,
            totalAmount: updatedTotalAmount,
        }}
    return initialState;
}

export const ItemContext = createContext({
    items : [],
    totalAmount : 0,
    addItem : (item) => {},
    removeItem : (id) => {}
})

const ItemContextProvider = (props) => {
    const [itemState, dispatchItem] = useReducer(itemReducer, initialState);
    const addItemHandler =(item) => {
        dispatchItem({type : "ADD_ITEM", item})
    }

    const removeItemHandler =(id) => {
        dispatchItem({type : "REMOVE_ITEM", id})
    }

    const ContextOfItem = {
        items : itemState.items,
        totalAmount : itemState.totalAmount,
        addItem : addItemHandler, 
        removeItem : removeItemHandler
    }

    return (
        <ItemContext.Provider value={ContextOfItem}>
            {props.children}
        </ItemContext.Provider>
    )
}

export default ItemContextProvider