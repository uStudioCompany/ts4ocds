import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { Flex } from 'ustudio-ui';
import { useMediaQuery } from 'ustudio-ui/hooks';
import { hasTypeParameter, isInterface } from '../../../api/validator';
import { Reflection, Property as PropertyType, TypeAliasReflection, InterfaceReflection } from '../../../api/typings';
import Layout from '../../Layout';
import Property from './Property';
import ModuleContext from './module-context';

import Styled from './style';

const renderProperty = (property: TypeAliasReflection | PropertyType, isReflectionInterface?: boolean): ReactNode => {
  return (
    <Property
      name={property.name}
      description={property.comment?.shortText}
      type={property.type}
      isOptional={(property as PropertyType).flags?.isOptional}
      isInterfaceProp={isReflectionInterface}
    />
  );
};

const mapProperties = (reflection: InterfaceReflection): ReactNode[] => {
  return reflection.children
    .sort((a, b) => (a > b ? -1 : 1))
    .sort((a, b) => {
      if (a.flags?.isOptional) return 1;

      if (b.flags?.isOptional) return -1;

      return 0;
    })
    .map((property) => <li key={property.name}>{renderProperty(property, isInterface(reflection))}</li>);
};

const ReflectionTemplate: React.FC<{ pageContext: Reflection }> = ({ pageContext: reflection }) => {
  const isMd = useMediaQuery('screen and (min-width: 768px)');

  return (
    <>
      <Helmet>
        <title>{`${reflection.module} - ${reflection.name}`}</title>
      </Helmet>

      <Layout>
        <Flex direction="column">
          {isMd ? <h1>{reflection.name}</h1> : <h4>{reflection.name}</h4>}

          {reflection?.comment && <Styled.Description source={reflection.comment.shortText} />}

          <ModuleContext.Provider value={{ module: reflection.module }}>
            {hasTypeParameter(reflection) && (
              <Styled.PropertyList>
                {reflection.typeParameter?.map((tp) => (
                  <Property
                    name={`<${tp.name}>`}
                    description="Type parameter"
                    type={tp.type}
                    key={tp.id}
                  />
                ))}
              </Styled.PropertyList>
            )}

            <Styled.PropertyList>
              {isInterface(reflection)
                ? mapProperties(reflection)
                : renderProperty({
                    ...reflection,
                    comment: undefined,
                  })}
            </Styled.PropertyList>
          </ModuleContext.Provider>
        </Flex>
      </Layout>
    </>
  );
};

export default ReflectionTemplate;
