import React from 'react';
import { Helmet } from 'react-helmet';
import { Flex } from 'ustudio-ui';
import { InterfaceReflection, Module as ModuleType, TypeAliasReflection } from '../../../api/typings';
import { createUrl } from '../../../utils';
import Styled from './style';
import Layout from '../../Layout';

const Module: React.FC<{ pageContext: ModuleType }> = ({ pageContext: module }) => {
  const interfaces = module.children.filter((reflection) => reflection.kindString === 'Interface');
  const typeAliases = module.children.filter((reflection) => reflection.kindString === 'Type alias');

  return (
    <>
      <Helmet>
        <title>{module.name}</title>
      </Helmet>

      <Layout>
        <h1>{module.name}</h1>

        {(interfaces.length || typeAliases.length) && (
          <Styled.ModulesList>
            {Boolean(interfaces.length) && (
              <Styled.Module>
                <Styled.CategoryName>Interfaces</Styled.CategoryName>

                <Styled.ReflectionsList>
                  {interfaces.map((interfaceReflection: InterfaceReflection) => (
                    <Flex alignment={{ horizontal: 'center' }} key={interfaceReflection.id}>
                      <Styled.Reflection to={createUrl(module.name, interfaceReflection.name)}>
                        {interfaceReflection.name}
                      </Styled.Reflection>
                    </Flex>
                  ))}
                </Styled.ReflectionsList>
              </Styled.Module>
            )}

            {Boolean(typeAliases.length) && (
              <Styled.Module>
                <Styled.CategoryName>Type aliases</Styled.CategoryName>

                <Styled.ReflectionsList>
                  {typeAliases.map((typeAliasReflection: TypeAliasReflection) => (
                    <Flex alignment={{ horizontal: 'center' }} key={typeAliasReflection.id}>
                      <Styled.Reflection to={createUrl(module.name, typeAliasReflection.name)}>
                        {typeAliasReflection.name}
                      </Styled.Reflection>
                    </Flex>
                  ))}
                </Styled.ReflectionsList>
              </Styled.Module>
            )}
          </Styled.ModulesList>
        )}
      </Layout>
    </>
  );
};

export default Module;
