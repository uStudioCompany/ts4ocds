![logo](https://raw.githubusercontent.com/uStudioCompany/ts4ocds/master/ts4ocds-banner.png)

[![npm](https://img.shields.io/npm/v/ts4ocds.svg)](https://www.npmjs.com/package/ts4ocds)
[![npm](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/ts4ocds)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/ts4ocds/peer/typescript)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# `ts4ocds`

`ts4ocds` is a library of TypeScript interfaces that takes an approach
to befriend large OCDS JSONs with your per-project routine of
writing whole lotta interfaces for them.

It consists of two main parts: `standard` and `extensions`.

## Installation

```shell script
$ npm i -D ts4ocds
# or
$ yarn add -D ts4ocds
```

## Usage

### `standard`

This includes all types and interfaces from bare
[OCDS v1.1.4](https://standard.open-contracting.org/latest/en/) standard.

```typescript
import { Item } from 'ts4ocds';
```

Note, that some top-level entities like `Tender` or `Planning`
are not included here as they sometimes depend on a context they are
used in.

### `extensions`

```typescript
import { Observation } from 'ts4ocds/extensions/metrics';

import { Requirement } from 'ts4ocds/extensions/requirements';
```

Please note, that all the extensions are imported from their respective
folder under the `extensions` module.

Also, take into consideration that `extensions` can populate some
entities from the `standard` with new properties. Here we extend
such interfaces from their `standard` counterparts and add new properties
so, for example, you can find `Item` in both `standard` and some of the `extensions`.
