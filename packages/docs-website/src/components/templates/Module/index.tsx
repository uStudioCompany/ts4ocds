import React from 'react';
import { InterfaceReflection, Module as ModuleType, TypeAliasReflection } from '../../../api/schema';
import StyledCategory from '../../../pages/categories/style';
import Layout from '../../Layout';

const Module: React.FC<{ pageContext: ModuleType }> = ({ pageContext: module }) => {
  const interfaces = module.children.filter((reflection) => reflection.kindString === 'Interface');
  const typeAliases = module.children.filter((reflection) => reflection.kindString === 'Type alias');

  return (
    <Layout>
      {(interfaces.length || typeAliases.length) && (
        <StyledCategory.CategoriesList>
          {Boolean(interfaces.length) && (
            <StyledCategory.Category direction="column" alignment={{ horizontal: 'center' }}>
              <StyledCategory.CategoryName>Interfaces</StyledCategory.CategoryName>

              <StyledCategory.ModulesList alignment={{ horizontal: 'center' }}>
                {interfaces.map((interfaceReflection: InterfaceReflection) => (
                  <StyledCategory.Module
                    to={`/${module.name}/${interfaceReflection.name}`}
                    key={interfaceReflection.name}
                  >
                    {interfaceReflection.name}
                  </StyledCategory.Module>
                ))}
              </StyledCategory.ModulesList>
            </StyledCategory.Category>
          )}

          {Boolean(typeAliases.length) && (
            <StyledCategory.Category direction="column" alignment={{ horizontal: 'center' }}>
              <StyledCategory.CategoryName>Type aliases</StyledCategory.CategoryName>

              <StyledCategory.ModulesList alignment={{ horizontal: 'center' }}>
                {typeAliases.map((typeAliasReflection: TypeAliasReflection) => (
                  <StyledCategory.Module
                    to={`/${module.name}/${typeAliasReflection.name}`}
                    key={typeAliasReflection.name}
                  >
                    {typeAliasReflection.name}
                  </StyledCategory.Module>
                ))}
              </StyledCategory.ModulesList>
            </StyledCategory.Category>
          )}
        </StyledCategory.CategoriesList>
      )}
    </Layout>
  );
};

export default Module;
