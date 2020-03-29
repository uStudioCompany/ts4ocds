import React, { ReactNode } from 'react';
import { hasTypeParameter, isInterface } from '../../../api/validator';
import { Reflection, Property as PropertyType, TypeAliasReflection } from '../../../api/schema';
import Layout from '../../Layout';
import Property from './Property';
import ModuleContext from './module-context';

import Styled from './style';

const renderProperty = (property: TypeAliasReflection | PropertyType): ReactNode => {
  return (
    <Property
      name={property.name}
      description={property.comment?.shortText}
      type={property.type}
      isOptional={(property as PropertyType).flags?.isOptional}
    />
  );
};

const mapProperties = (reflection: Reflection) => {
  return (
    isInterface(reflection) &&
    reflection.children
      .sort((a, b) => {
        if (a.flags?.isOptional) return 1;

        if (b.flags?.isOptional) return -1;

        return 0;
      })
      .map((property) => <li key={property.name}>{renderProperty(property)}</li>)
  );
};

const ReflectionTemplate: React.FC<{ pageContext: Reflection }> = ({ pageContext: reflection }) => {
  return (
    <Layout>
      <Styled.Reflection direction="column">
        <h1>{reflection.name}</h1>

        {reflection?.comment && <Styled.Description source={reflection.comment.shortText} />}

        <ModuleContext.Provider value={{ module: reflection.module }}>
          {hasTypeParameter(reflection) && (
            <Styled.PropertyList>
              {reflection.typeParameter?.map((tp) => (
                <Property name={`<${tp.name}>`} description="Type parameter" type={tp.type} key={tp.id} />
              ))}
            </Styled.PropertyList>
          )}

          <Styled.PropertyList>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-ignore */}
            {// @ts-ignore
            isInterface(reflection)
              ? mapProperties(reflection)
              : renderProperty({
                  ...reflection,
                  comment: undefined,
                })}
          </Styled.PropertyList>
        </ModuleContext.Provider>
      </Styled.Reflection>
    </Layout>
  );
};

export default ReflectionTemplate;
