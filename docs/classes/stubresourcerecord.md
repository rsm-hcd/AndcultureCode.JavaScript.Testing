[andculturecode-javascript-testing](../README.md) › [StubResourceRecord](stubresourcerecord.md)

# Class: StubResourceRecord ‹**TProps**›

## Type parameters

▪ **TProps**: *object*

## Hierarchy

* [Record](stubresourcerecord.md#static-record)‹object, this› & object

  ↳ **StubResourceRecord**

## Implements

* [StubResource](../interfaces/stubresource.md)

## Index

### Namespaces

* [Factory](../modules/stubresourcerecord.factory.md)

### Methods

* [[Symbol.iterator]](stubresourcerecord.md#[symbol.iterator])
* [asImmutable](stubresourcerecord.md#asimmutable)
* [asMutable](stubresourcerecord.md#asmutable)
* [clear](stubresourcerecord.md#clear)
* [delete](stubresourcerecord.md#delete)
* [deleteIn](stubresourcerecord.md#deletein)
* [equals](stubresourcerecord.md#equals)
* [get](stubresourcerecord.md#get)
* [getIn](stubresourcerecord.md#getin)
* [has](stubresourcerecord.md#has)
* [hasIn](stubresourcerecord.md#hasin)
* [hashCode](stubresourcerecord.md#hashcode)
* [merge](stubresourcerecord.md#merge)
* [mergeDeep](stubresourcerecord.md#mergedeep)
* [mergeDeepIn](stubresourcerecord.md#mergedeepin)
* [mergeDeepWith](stubresourcerecord.md#mergedeepwith)
* [mergeIn](stubresourcerecord.md#mergein)
* [mergeWith](stubresourcerecord.md#mergewith)
* [remove](stubresourcerecord.md#remove)
* [removeIn](stubresourcerecord.md#removein)
* [set](stubresourcerecord.md#set)
* [setIn](stubresourcerecord.md#setin)
* [toJS](stubresourcerecord.md#tojs)
* [toJSON](stubresourcerecord.md#tojson)
* [toObject](stubresourcerecord.md#toobject)
* [toSeq](stubresourcerecord.md#toseq)
* [update](stubresourcerecord.md#update)
* [updateIn](stubresourcerecord.md#updatein)
* [wasAltered](stubresourcerecord.md#wasaltered)
* [withMutations](stubresourcerecord.md#withmutations)
* [Factory](stubresourcerecord.md#static-factory)
* [Record](stubresourcerecord.md#static-record)
* [getDescriptiveName](stubresourcerecord.md#static-getdescriptivename)
* [isRecord](stubresourcerecord.md#static-isrecord)

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[]›*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[[Symbol.iterator]](stubresourcerecord.md#[symbol.iterator])*

Defined in node_modules/immutable/dist/immutable.d.ts:2645

**Returns:** *IterableIterator‹[]›*

___

###  asImmutable

▸ **asImmutable**(): *this*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[asImmutable](stubresourcerecord.md#asimmutable)*

Defined in node_modules/immutable/dist/immutable.d.ts:2639

**`see`** `Map#asImmutable`

**Returns:** *this*

___

###  asMutable

▸ **asMutable**(): *this*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[asMutable](stubresourcerecord.md#asmutable)*

Defined in node_modules/immutable/dist/immutable.d.ts:2629

**`see`** `Map#asMutable`

**Returns:** *this*

___

###  clear

▸ **clear**(): *this*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[clear](stubresourcerecord.md#clear)*

Defined in node_modules/immutable/dist/immutable.d.ts:2575

Returns a new instance of this Record type with all values set
to their default values.

**Returns:** *this*

___

###  delete

▸ **delete**‹**K**›(`key`: K): *this*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[delete](stubresourcerecord.md#delete)*

Defined in node_modules/immutable/dist/immutable.d.ts:2568

Returns a new instance of this Record type with the value for the
specific key set to its default value.

**`alias`** remove

**Type parameters:**

▪ **K**: *keyof TProps*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *this*

___

###  deleteIn

▸ **deleteIn**(`keyPath`: Iterable‹unknown›): *this*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[deleteIn](stubresourcerecord.md#deletein)*

Defined in node_modules/immutable/dist/immutable.d.ts:2593

**`alias`** removeIn

**Parameters:**

Name | Type |
------ | ------ |
`keyPath` | Iterable‹unknown› |

**Returns:** *this*

___

###  equals

▸ **equals**(`other`: unknown): *boolean*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[equals](stubresourcerecord.md#equals)*

Defined in node_modules/immutable/dist/immutable.d.ts:2536

**Parameters:**

Name | Type |
------ | ------ |
`other` | unknown |

**Returns:** *boolean*

___

###  get

▸ **get**‹**K**›(`key`: K, `notSetValue?`: unknown): *TProps[K]*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[get](stubresourcerecord.md#get)*

Defined in node_modules/immutable/dist/immutable.d.ts:2526

Returns the value associated with the provided key, which may be the
default value defined when creating the Record factory function.

If the requested key is not defined by this Record type, then
notSetValue will be returned if provided. Note that this scenario would
produce an error when using Flow or TypeScript.

**Type parameters:**

▪ **K**: *keyof TProps*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`notSetValue?` | unknown |

**Returns:** *TProps[K]*

▸ **get**‹**T**›(`key`: string, `notSetValue`: T): *T*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[get](stubresourcerecord.md#get)*

Defined in node_modules/immutable/dist/immutable.d.ts:2527

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`notSetValue` | T |

**Returns:** *T*

___

###  getIn

▸ **getIn**(`keyPath`: Iterable‹unknown›): *unknown*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[getIn](stubresourcerecord.md#getin)*

Defined in node_modules/immutable/dist/immutable.d.ts:2532

**Parameters:**

Name | Type |
------ | ------ |
`keyPath` | Iterable‹unknown› |

**Returns:** *unknown*

___

###  has

▸ **has**(`key`: string): *key is keyof TProps & string*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[has](stubresourcerecord.md#has)*

Defined in node_modules/immutable/dist/immutable.d.ts:2516

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *key is keyof TProps & string*

___

###  hasIn

▸ **hasIn**(`keyPath`: Iterable‹unknown›): *boolean*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[hasIn](stubresourcerecord.md#hasin)*

Defined in node_modules/immutable/dist/immutable.d.ts:2531

**Parameters:**

Name | Type |
------ | ------ |
`keyPath` | Iterable‹unknown› |

**Returns:** *boolean*

___

###  hashCode

▸ **hashCode**(): *number*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[hashCode](stubresourcerecord.md#hashcode)*

Defined in node_modules/immutable/dist/immutable.d.ts:2537

**Returns:** *number*

___

###  merge

▸ **merge**(...`collections`: Array‹Partial‹TProps› | Iterable‹[]››): *this*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[merge](stubresourcerecord.md#merge)*

Defined in node_modules/immutable/dist/immutable.d.ts:2546

**Parameters:**

Name | Type |
------ | ------ |
`...collections` | Array‹Partial‹TProps› &#124; Iterable‹[]›› |

**Returns:** *this*

___

###  mergeDeep

▸ **mergeDeep**(...`collections`: Array‹Partial‹TProps› | Iterable‹[]››): *this*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[mergeDeep](stubresourcerecord.md#mergedeep)*

Defined in node_modules/immutable/dist/immutable.d.ts:2549

**Parameters:**

Name | Type |
------ | ------ |
`...collections` | Array‹Partial‹TProps› &#124; Iterable‹[]›› |

**Returns:** *this*

___

###  mergeDeepIn

▸ **mergeDeepIn**(`keyPath`: Iterable‹unknown›, ...`collections`: Array‹unknown›): *this*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[mergeDeepIn](stubresourcerecord.md#mergedeepin)*

Defined in node_modules/immutable/dist/immutable.d.ts:2585

**Parameters:**

Name | Type |
------ | ------ |
`keyPath` | Iterable‹unknown› |
`...collections` | Array‹unknown› |

**Returns:** *this*

___

###  mergeDeepWith

▸ **mergeDeepWith**(`merger`: function, ...`collections`: Array‹Partial‹TProps› | Iterable‹[]››): *this*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[mergeDeepWith](stubresourcerecord.md#mergedeepwith)*

Defined in node_modules/immutable/dist/immutable.d.ts:2557

**Parameters:**

▪ **merger**: *function*

▸ (`oldVal`: unknown, `newVal`: unknown, `key`: unknown): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`oldVal` | unknown |
`newVal` | unknown |
`key` | unknown |

▪... **collections**: *Array‹Partial‹TProps› | Iterable‹[]››*

**Returns:** *this*

___

###  mergeIn

▸ **mergeIn**(`keyPath`: Iterable‹unknown›, ...`collections`: Array‹unknown›): *this*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[mergeIn](stubresourcerecord.md#mergein)*

Defined in node_modules/immutable/dist/immutable.d.ts:2584

**Parameters:**

Name | Type |
------ | ------ |
`keyPath` | Iterable‹unknown› |
`...collections` | Array‹unknown› |

**Returns:** *this*

___

###  mergeWith

▸ **mergeWith**(`merger`: function, ...`collections`: Array‹Partial‹TProps› | Iterable‹[]››): *this*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[mergeWith](stubresourcerecord.md#mergewith)*

Defined in node_modules/immutable/dist/immutable.d.ts:2553

**Parameters:**

▪ **merger**: *function*

▸ (`oldVal`: unknown, `newVal`: unknown, `key`: keyof TProps): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`oldVal` | unknown |
`newVal` | unknown |
`key` | keyof TProps |

▪... **collections**: *Array‹Partial‹TProps› | Iterable‹[]››*

**Returns:** *this*

___

###  remove

▸ **remove**‹**K**›(`key`: K): *this*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[remove](stubresourcerecord.md#remove)*

Defined in node_modules/immutable/dist/immutable.d.ts:2569

**Type parameters:**

▪ **K**: *keyof TProps*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *this*

___

###  removeIn

▸ **removeIn**(`keyPath`: Iterable‹unknown›): *this*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[removeIn](stubresourcerecord.md#removein)*

Defined in node_modules/immutable/dist/immutable.d.ts:2594

**Parameters:**

Name | Type |
------ | ------ |
`keyPath` | Iterable‹unknown› |

**Returns:** *this*

___

###  set

▸ **set**‹**K**›(`key`: K, `value`: TProps[K]): *this*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[set](stubresourcerecord.md#set)*

Defined in node_modules/immutable/dist/immutable.d.ts:2541

**Type parameters:**

▪ **K**: *keyof TProps*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | TProps[K] |

**Returns:** *this*

___

###  setIn

▸ **setIn**(`keyPath`: Iterable‹unknown›, `value`: unknown): *this*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[setIn](stubresourcerecord.md#setin)*

Defined in node_modules/immutable/dist/immutable.d.ts:2579

**Parameters:**

Name | Type |
------ | ------ |
`keyPath` | Iterable‹unknown› |
`value` | unknown |

**Returns:** *this*

___

###  toJS

▸ **toJS**(): *object*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[toJS](stubresourcerecord.md#tojs)*

Defined in node_modules/immutable/dist/immutable.d.ts:2604

Deeply converts this Record to equivalent native JavaScript Object.

Note: This method may not be overridden. Objects with custom
serialization to plain JS may override toJSON() instead.

**Returns:** *object*

___

###  toJSON

▸ **toJSON**(): *TProps*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[toJSON](stubresourcerecord.md#tojson)*

Defined in node_modules/immutable/dist/immutable.d.ts:2609

Shallowly converts this Record to equivalent native JavaScript Object.

**Returns:** *TProps*

___

###  toObject

▸ **toObject**(): *TProps*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[toObject](stubresourcerecord.md#toobject)*

Defined in node_modules/immutable/dist/immutable.d.ts:2614

Shallowly converts this Record to equivalent JavaScript Object.

**Returns:** *TProps*

___

###  toSeq

▸ **toSeq**(): *Keyed‹keyof TProps, TProps[keyof TProps]›*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[toSeq](stubresourcerecord.md#toseq)*

Defined in node_modules/immutable/dist/immutable.d.ts:2643

**Returns:** *Keyed‹keyof TProps, TProps[keyof TProps]›*

___

###  update

▸ **update**‹**K**›(`key`: K, `updater`: function): *this*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[update](stubresourcerecord.md#update)*

Defined in node_modules/immutable/dist/immutable.d.ts:2542

**Type parameters:**

▪ **K**: *keyof TProps*

**Parameters:**

▪ **key**: *K*

▪ **updater**: *function*

▸ (`value`: TProps[K]): *TProps[K]*

**Parameters:**

Name | Type |
------ | ------ |
`value` | TProps[K] |

**Returns:** *this*

___

###  updateIn

▸ **updateIn**(`keyPath`: Iterable‹unknown›, `updater`: function): *this*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[updateIn](stubresourcerecord.md#updatein)*

Defined in node_modules/immutable/dist/immutable.d.ts:2580

**Parameters:**

▪ **keyPath**: *Iterable‹unknown›*

▪ **updater**: *function*

▸ (`value`: unknown): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *this*

___

###  wasAltered

▸ **wasAltered**(): *boolean*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[wasAltered](stubresourcerecord.md#wasaltered)*

Defined in node_modules/immutable/dist/immutable.d.ts:2634

**`see`** `Map#wasAltered`

**Returns:** *boolean*

___

###  withMutations

▸ **withMutations**(`mutator`: function): *this*

*Inherited from [StubResourceRecord](stubresourcerecord.md).[withMutations](stubresourcerecord.md#withmutations)*

Defined in node_modules/immutable/dist/immutable.d.ts:2624

Note: Not all methods can be used on a mutable collection or within
`withMutations`! Only `set` may be used mutatively.

**`see`** `Map#withMutations`

**Parameters:**

▪ **mutator**: *function*

▸ (`mutable`: this): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`mutable` | this |

**Returns:** *this*

___

### `Static` Factory

▸ **Factory**‹**TProps**›(`values?`: Partial‹TProps› | Iterable‹[]›): *[Record](stubresourcerecord.md#static-record)‹TProps› & Readonly‹TProps›*

Defined in node_modules/immutable/dist/immutable.d.ts:2494

**Type parameters:**

▪ **TProps**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`values?` | Partial‹TProps› &#124; Iterable‹[]› |

**Returns:** *[Record](stubresourcerecord.md#static-record)‹TProps› & Readonly‹TProps›*

___

### `Static` Record

▸ **Record**‹**TProps**›(`defaultValues`: TProps, `name?`: undefined | string): *[Factory](../modules/stubresourcerecord.factory.md)‹TProps›*

Defined in node_modules/immutable/dist/immutable.d.ts:2508

Unlike other types in Immutable.js, the `Record()` function creates a new
Record Factory, which is a function that creates Record instances.

See above for examples of using `Record()`.

Note: `Record` is a factory function and not a class, and does not use the
`new` keyword during construction.

**Type parameters:**

▪ **TProps**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`defaultValues` | TProps |
`name?` | undefined &#124; string |

**Returns:** *[Factory](../modules/stubresourcerecord.factory.md)‹TProps›*

___

### `Static` getDescriptiveName

▸ **getDescriptiveName**(`record`: [Record](stubresourcerecord.md#static-record)‹any›): *string*

Defined in node_modules/immutable/dist/immutable.d.ts:2428

Records allow passing a second parameter to supply a descriptive name
that appears when converting a Record to a string or in any error
messages. A descriptive name for any record can be accessed by using this
method. If one was not provided, the string "Record" is returned.

```js
const { Record } = require('immutable')
const Person = Record({
  name: null
}, 'Person')

var me = Person({ name: 'My Name' })
me.toString() // "Person { "name": "My Name" }"
Record.getDescriptiveName(me) // "Person"
```

**Parameters:**

Name | Type |
------ | ------ |
`record` | [Record](stubresourcerecord.md#static-record)‹any› |

**Returns:** *string*

___

### `Static` isRecord

▸ **isRecord**(`maybeRecord`: unknown): *maybeRecord is Record‹object›*

Defined in node_modules/immutable/dist/immutable.d.ts:2409

True if `maybeRecord` is an instance of a Record.

**Parameters:**

Name | Type |
------ | ------ |
`maybeRecord` | unknown |

**Returns:** *maybeRecord is Record‹object›*
