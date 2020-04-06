import React, { ReactNode, useMemo, useState } from 'react';
import { TextInput, Text } from 'ustudio-ui';
import { Module, Reflection } from '../../../api/typings';
import { useModules, useReflections } from '../../../context/APIContext';
import { createUrl } from '../../../utils';
import Styled from './style';
import StyledHeader from '../style';

const findModules = ({ query, modules }: { query: string; modules: Partial<Module>[] }): Partial<Module>[] => {
  return modules.filter((module) => module.name?.toLowerCase().includes(query.trim().toLowerCase()));
};

const findReflections = ({
  query,
  reflections,
}: {
  query: string;
  reflections: Partial<Reflection>[];
}): Partial<Reflection>[] => {
  return reflections.filter((reflection) => reflection.name?.toLowerCase().includes(query.trim().toLowerCase()));
};

const renderModules = (modules: Partial<Module>[]): ReactNode => {
  return (
    <Styled.GroupList>
      <Styled.GroupListTitle>
        <Text variant="caption">Modules</Text>
      </Styled.GroupListTitle>

      {modules.map(({ name }) => {
        return (
          <li key={name}>
            <StyledHeader.ModuleLink to={createUrl(name)}>{name}</StyledHeader.ModuleLink>
          </li>
        );
      })}
    </Styled.GroupList>
  );
};

const renderReflections = (reflections: Partial<Reflection>[]): ReactNode => {
  return (
    <Styled.GroupList>
      <Styled.GroupListTitle>
        <Text variant="caption">Reflections</Text>
      </Styled.GroupListTitle>

      {reflections.map(({ name, module }) => {
        return (
          <li key={name}>
            <StyledHeader.ModuleLink to={createUrl(module, name)}>{name}</StyledHeader.ModuleLink>
          </li>
        );
      })}
    </Styled.GroupList>
  );
};

const Search: React.FC = () => {
  const [query, setQuery] = useState('');

  const reflectionsMap = useReflections();
  const reflections = useMemo(
    () =>
      ((Object.keys(reflectionsMap) as unknown) as number[]).map((id: number) => {
        const { name, module } = reflectionsMap[id];

        return { name, module };
      }),
    [reflectionsMap]
  );

  const modulesMap = useModules();
  const modules = useMemo(
    () =>
      ((Object.keys(modulesMap) as unknown) as number[]).map((id: number) => {
        const { name } = modulesMap[id];

        return { name };
      }),
    [modulesMap]
  );

  const foundModules = useMemo(() => findModules({ query, modules }), [query]);
  const foundReflections = useMemo(() => findReflections({ query, reflections }), [query]);

  return (
    <Styled.SearchContainer>
      <TextInput value={query} onChange={setQuery} placeholder="Search" />

      <Styled.ResultsContainer>
        {!foundModules.length && !foundReflections.length && <Styled.NoResults>No items found</Styled.NoResults>}

        {Boolean(foundModules.length) && renderModules(foundModules)}

        {Boolean(foundReflections.length) && renderReflections(foundReflections)}
      </Styled.ResultsContainer>
    </Styled.SearchContainer>
  );
};

export default Search;
