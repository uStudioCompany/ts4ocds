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

### Validators

Validators help you better differentiate interface with relatable fields.
For example, `Requirement`'s `value` field depends on its `dataType`, which
could easily be checked with a validator function:

```typescript
import { isOfTypeString } from 'ts4ocds/validators';

const stringRequirement = isOfTypeString(requirement);

// Asserts that requirement's dataType is 'string',
// so that its value should also be of type string
```

## Contributing

We are open to receive any contributings to our project. If you are willing to contribute,
please make sure to read our [contributing](https://github.com/uStudioCompany/ts4ocds/blob/master/CONTRIBUTING.md)
guide.

If you have noticed bugs or want to propose a new feature/improvement, you should check out
our [issues](https://github.com/uStudioCompany/ts4ocds/issues) section. Every properly
written issue will be attended and reviewed by our team.
