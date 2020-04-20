import { Link } from 'gatsby';
import React, { ReactNode } from 'react';
import { ModulesMap, Reference as ReferenceType, ReflectionsMap } from '../../../../api/typings';
import { useModules, useReflections } from '../../../../context/APIContext';
import { createUrl } from '../../../../utils';
import { useModule } from '../module-context';

const renderLink = ({
  reference,
  references,
  modules,
  module,
}: {
  reference: ReferenceType;
  references: ReflectionsMap;
  modules: ModulesMap;
  module: string;
}): ReactNode => {
  /**
   * This is done due to a bug when where there should be a pointer to a reference
   * there is a pointer to a module with the same name.
   */
  if (!references[reference.id]) {
    if (modules[reference.id]) {
      return (
        <Link to={createUrl(modules[reference.id].name, reference.name)} key={reference.name}>
          {reference.name}
        </Link>
      );
    }
    /**
     * Where in conditional type reference id is not specified
     */
    if (!reference.id) {
      return (
        <Link to={createUrl(module, reference.name)} key={reference.name}>
          {reference.name}
        </Link>
      );
    }
    /**
     * This is an edge case of the reference pointing to the type parameter that cannot be validated here
     */
    return `<${reference.name}>`;
  }

  return (
    <Link to={createUrl(references[reference.id].module, reference.name)} key={reference.name}>
      {reference.name}
    </Link>
  );
};

const Reference: React.FC<ReferenceType> = (reference) => {
  const references = useReflections();
  const modules = useModules();
  const module = useModule();

  return <>{renderLink({ reference, references, modules, module })}</>;
};

export default Reference;
