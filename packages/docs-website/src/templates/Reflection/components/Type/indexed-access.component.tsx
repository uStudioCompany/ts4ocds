import React from 'react';
import { IndexedAccess as IndexedAccessType } from '../../../../api/typings';
import { renderType } from './type.module';

const IndexedAccess: React.FC<IndexedAccessType> = (indexedAccess) => {
  return (
    <>
      {renderType(indexedAccess.objectType)}[{renderType(indexedAccess.indexType)}]
    </>
  );
};

export default IndexedAccess;
