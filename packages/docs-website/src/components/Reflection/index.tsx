import React from 'react';
import { isInterface } from '../../api/validator';
import { Reflection } from '../../api/schema';
import Layout from '../Layout';
import Property from '../Property';

import Styled from './style';

const mapProperties = (reflection: Reflection) => {
  return (
    isInterface(reflection) &&
    reflection.children
      .sort((a, b) => {
        if (a.flags?.isOptional) return 1;

        if (b.flags?.isOptional) return -1;

        return 0;
      })
      .map(({ name, comment, type, flags }) => (
        <li key={name}>
          <Property name={name} description={comment?.shortText} type={type} isOptional={flags?.isOptional} />
        </li>
      ))
  );
};

const ReflectionTemplate: React.FC<{ pageContext: Reflection }> = ({ pageContext: reflection }) => {
  return (
    <Layout>
      <Styled.Reflection direction="column">
        <h1>{reflection.name}</h1>

        {reflection?.comment && <Styled.Description>{reflection.comment.shortText}</Styled.Description>}

        <Styled.PropertyList>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-ignore */}
          {// @ts-ignore
          mapProperties(reflection)}
        </Styled.PropertyList>
      </Styled.Reflection>
    </Layout>
  );
};

export default ReflectionTemplate;
