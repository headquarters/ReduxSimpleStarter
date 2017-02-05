export default function({ dispatch }){
    return next => action => {
        // action payload does not exist or is not a promise
        if (!action.payload || !action.payload.then) {
            return next(action);
        }

        action.payload
            .then(response => {
                const newAction = { ...action, payload: response };

                // send newAction through ALL the middlewares, not just the next one
                dispatch(newAction);
            });
    };
}
