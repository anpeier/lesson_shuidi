import { CHANGE_INPUT, ADD_ITEM, REMOVE_ITEM } from "./actionsType";

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value,
});

export const addItemAction = () => ({
  type: ADD_ITEM,
});

export const removeItemAction = (index) => ({
  type: REMOVE_ITEM,
  index,
});


