import React from 'react';
import { InterfaceReflection, Module as ModuleType, TypeAliasReflection } from '../../../api/typings';
import Styled from './style';
import Layout from '../../Layout';

const Module: React.FC<{ pageContext: ModuleType }> = ({ pageContext: module }) => {
  const interfaces = module.children.filter((reflection) => reflection.kindString === 'Interface');
  const typeAliases = module.children.filter((reflection) => reflection.kindString === 'Type alias');

  return (
    <Layout>
      {(interfaces.length || typeAliases.length) && (
        <Styled.ModulesList>
          {Boolean(interfaces.length) && (
            <Styled.Module direction="column" alignment={{ horizontal: 'center' }}>
              <Styled.CategoryName>Interfaces</Styled.CategoryName>

              <Styled.ReflectionsList alignment={{ horizontal: 'center' }}>
                {interfaces.map((interfaceReflection: InterfaceReflection) => (
                  <Styled.Reflection to={`/${module.name}/${interfaceReflection.name}`} key={interfaceReflection.name}>
                    {interfaceReflection.name}
                  </Styled.Reflection>
                ))}
              </Styled.ReflectionsList>
            </Styled.Module>
          )}

          {Boolean(typeAliases.length) && (
            <Styled.Module direction="column" alignment={{ horizontal: 'center' }}>
              <Styled.CategoryName>Type aliases</Styled.CategoryName>

              <Styled.ReflectionsList alignment={{ horizontal: 'center' }}>
                {typeAliases.map((typeAliasReflection: TypeAliasReflection) => (
                  <Styled.Reflection to={`/${module.name}/${typeAliasReflection.name}`} key={typeAliasReflection.name}>
                    {typeAliasReflection.name}
                  </Styled.Reflection>
                ))}
              </Styled.ReflectionsList>
            </Styled.Module>
          )}
        </Styled.ModulesList>
      )}
    </Layout>
  );
};

export default Module;
