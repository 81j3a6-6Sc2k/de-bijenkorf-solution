const DEFAULT_STATE = {
    status: 'UNKNOWN',
    assignee: {},
    items: [],
    assignedAt: null,
    placedAt: null,
    customer: {}
};

const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
    case 'ITEM_SET_STATUS':
        const { payload } = action;
        let newState = { ...state };
      
        newState.items = newState.items.map(item => {
            if (item.id === payload.id) {
                item.status = (item.status === 'RESERVED' ? 'NEW' : 'RESERVED');
            }
            return item;
        });

        return newState;
    default:
        return state;
  };
};

export default reducer;