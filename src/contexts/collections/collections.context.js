import { createContext } from 'react';
import SHOP_DATA from './shop.data';

// create collection context that stores contain SHOP_DATA (initial value)
const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;
