import { Link } from 'gatsby';
import React from 'react';
import Flex from 'ustudio-ui/components/Flex';

import { globalHistory } from '@reach/router';
import config from '../../../gatsby-config.js';
import categories from '../../lib/categories';

const includesPrefix = (pathArray: string[]): boolean => pathArray.includes(config.pathPrefix.slice(1));

const getFullLink = (path: string, pathArray: string[]): string => {
  return pathArray.slice(0, pathArray.indexOf(path) - 1).join('/');
};

const kebabToPascal = (kebab: string): string => {
  return kebab.split('-').reduce((pascal, word) => `${pascal}${word.slice(0, 1).toUpperCase()}${word.slice(1)}`, ``);
};

const whichCategory = (path: string): 'Standard' | 'Extensions' => {
  return categories.extensions.map((module) => module.name).includes(kebabToPascal(path)) ? 'Extensions' : 'Standard';
};

const renderBreadcrumbs = () => {
  const filteredPathArray = globalHistory.location.pathname.split('/').filter(Boolean);
  const pathArray = includesPrefix(filteredPathArray) ? filteredPathArray.slice(1) : filteredPathArray;

  return pathArray.length ? (
    <Flex margin={{ bottom: 'regular' }} isWrap>
      <small>{whichCategory(pathArray[0])}&nbsp;</small>

      {pathArray.slice(0, -1).map((path: string) => (
        <small key={path}>
          {' / '}
          <Link to={`/${getFullLink(path, pathArray)}`}>{kebabToPascal(path)}</Link>&nbsp;
        </small>
      ))}

      <small>/ {kebabToPascal(pathArray[pathArray.length - 1])}</small>
    </Flex>
  ) : (
    <></>
  );
};

const Breadcrumbs: React.FC = () => {
  return renderBreadcrumbs();
};

export default Breadcrumbs;
