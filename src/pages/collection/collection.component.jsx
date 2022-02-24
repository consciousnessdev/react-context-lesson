import React, { useContext } from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import CollectionsContext from '../../contexts/collections/collections.context';

import './collection.styles.scss';

// Way to get value of CollectionContext Data

// 1st way, CollectionContext As Component
// const CollectionPage = ({ match }) => {
// return (
//   <CollectionsContext.Consumer>
//     {
//       // this collections rechieved from CollectionsContext consumer
//       collections => {
//         // select collection by match.params.collectionId
//         const collection = collections[match.params.collectionId];
//         const { title, items } = collection;
//         return (
//           <div className="collection-page">
//             <h2 className="title">{title}</h2>
//             <div className="items">
//               {items.map((item) => (
//                 <CollectionItem key={item.id} item={item} />
//               ))}
//             </div>
//           </div>
//         )
//       }
//     }
//   </CollectionsContext.Consumer>
// );
// };

// 2nd way, use hooks useContext, to consume context
const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
