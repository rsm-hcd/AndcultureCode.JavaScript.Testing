[andculturecode-javascript-testing](../README.md) › [StubResourceRecord](../classes/stubresourcerecord.md) › [Factory](stubresourcerecord.factory.md)

# Namespace: Factory ‹**TProps**›

A Record.Factory is created by the `Record()` function. Record instances
are created by passing it some of the accepted values for that Record
type:

<!-- runkit:activate
     { "preamble": "const { Record } = require('immutable')" }
-->
```js
// makePerson is a Record Factory function
const makePerson = Record({ name: null, favoriteColor: 'unknown' });

// alan is a Record instance
const alan = makePerson({ name: 'Alan' });
```

Note that Record Factories return `Record<TProps> & Readonly<TProps>`,
this allows use of both the Record instance API, and direct property
access on the resulting instances:

<!-- runkit:activate
     { "preamble": "const { Record } = require('immutable');const makePerson = Record({ name: null, favoriteColor: 'unknown' });const alan = makePerson({ name: 'Alan' });" }
-->
```js
// Use the Record API
console.log('Record API: ' + alan.get('name'))

// Or direct property access (Readonly)
console.log('property access: ' + alan.name)
```

**Flow Typing Records:**

Use the `RecordFactory<TProps>` Flow type to get high quality type checking of
Records:

```js
import type { RecordFactory, RecordOf } from 'immutable';

// Use RecordFactory<TProps> for defining new Record factory functions.
type PersonProps = { name: ?string, favoriteColor: string };
const makePerson: RecordFactory<PersonProps> = Record({ name: null, favoriteColor: 'unknown' });

// Use RecordOf<T> for defining new instances of that Record.
type Person = RecordOf<PersonProps>;
const alan: Person = makePerson({ name: 'Alan' });
```

## Type parameters

▪ **TProps**: *object*

## Callable

▸ (`values?`: Partial‹TProps› | Iterable‹[]›): *[Record](../classes/stubresourcerecord.md#static-record)‹TProps› & Readonly‹TProps›*

Defined in node_modules/immutable/dist/immutable.d.ts:2480

A Record.Factory is created by the `Record()` function. Record instances
are created by passing it some of the accepted values for that Record
type:

<!-- runkit:activate
     { "preamble": "const { Record } = require('immutable')" }
-->
```js
// makePerson is a Record Factory function
const makePerson = Record({ name: null, favoriteColor: 'unknown' });

// alan is a Record instance
const alan = makePerson({ name: 'Alan' });
```

Note that Record Factories return `Record<TProps> & Readonly<TProps>`,
this allows use of both the Record instance API, and direct property
access on the resulting instances:

<!-- runkit:activate
     { "preamble": "const { Record } = require('immutable');const makePerson = Record({ name: null, favoriteColor: 'unknown' });const alan = makePerson({ name: 'Alan' });" }
-->
```js
// Use the Record API
console.log('Record API: ' + alan.get('name'))

// Or direct property access (Readonly)
console.log('property access: ' + alan.name)
```

**Flow Typing Records:**

Use the `RecordFactory<TProps>` Flow type to get high quality type checking of
Records:

```js
import type { RecordFactory, RecordOf } from 'immutable';

// Use RecordFactory<TProps> for defining new Record factory functions.
type PersonProps = { name: ?string, favoriteColor: string };
const makePerson: RecordFactory<PersonProps> = Record({ name: null, favoriteColor: 'unknown' });

// Use RecordOf<T> for defining new instances of that Record.
type Person = RecordOf<PersonProps>;
const alan: Person = makePerson({ name: 'Alan' });
```

**Parameters:**

Name | Type |
------ | ------ |
`values?` | Partial‹TProps› &#124; Iterable‹[]› |

**Returns:** *[Record](../classes/stubresourcerecord.md#static-record)‹TProps› & Readonly‹TProps›*

## Index

### Constructors

* [constructor](stubresourcerecord.factory.md#constructor)

### Properties

* [displayName](stubresourcerecord.factory.md#displayname)

## Constructors

###  constructor

\+ **new Factory**(`values?`: Partial‹TProps› | Iterable‹[]›): *[Record](../classes/stubresourcerecord.md#static-record)‹TProps› & Readonly‹TProps›*

Defined in node_modules/immutable/dist/immutable.d.ts:2482

**Parameters:**

Name | Type |
------ | ------ |
`values?` | Partial‹TProps› &#124; Iterable‹[]› |

**Returns:** *[Record](../classes/stubresourcerecord.md#static-record)‹TProps› & Readonly‹TProps›*

## Properties

###  displayName

• **displayName**: *string*

Defined in node_modules/immutable/dist/immutable.d.ts:2491

The name provided to `Record(values, name)` can be accessed with
`displayName`.
