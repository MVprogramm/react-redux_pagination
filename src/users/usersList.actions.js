export const PREV = 'USERSLIST/GO_PREV';
export const NEXT = 'USERSLIST/GO_NEXT';

export const goPrev = () => {
  return {
    type: PREV
  }
}

export const goNext = (items) => {
  return {
    type: NEXT,
    payload: items
  }
}