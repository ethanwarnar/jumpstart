import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from './rootReducer.js'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage';


// const store = createStore(rootReducer, applyMiddleware(thunk));



const persistConfig = {
    key: 'dashboard',
    storage: storage,
    whitelist: ['dashboard'] // which reducer want to store
};
const pReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk);

const store = createStore(pReducer, middleware);



const persistor = persistStore(store);
export { persistor, store };



export default store;