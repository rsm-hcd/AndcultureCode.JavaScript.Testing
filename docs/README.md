[andculturecode-javascript-testing](README.md)

# andculturecode-javascript-testing

## Index

### Classes

* [StubResourceRecord](classes/stubresourcerecord.md)

### Interfaces

* [MockAxios](interfaces/mockaxios.md)
* [StubResource](interfaces/stubresource.md)

### Type aliases

* [AxiosJestMock](README.md#axiosjestmock)

### Variables

* [AxiosResponseFactory](README.md#const-axiosresponsefactory)
* [StubResourceRecordFactory](README.md#const-stubresourcerecordfactory)

### Functions

* [_mockSuccess](README.md#const-_mocksuccess)
* [_resultObjectToJS](README.md#const-_resultobjecttojs)
* [deleteSuccess](README.md#const-deletesuccess)
* [getSuccess](README.md#const-getsuccess)
* [listSuccess](README.md#const-listsuccess)
* [postSuccess](README.md#const-postsuccess)
* [putSuccess](README.md#const-putsuccess)
* [testLoop](README.md#const-testloop)

### Object literals

* [FactoryType](README.md#const-factorytype)
* [MockAxios](README.md#const-mockaxios)
* [TestUtils](README.md#const-testutils)

## Type aliases

###  AxiosJestMock

Ƭ **AxiosJestMock**: *Mock‹Promise‹object›, []›*

*Defined in [src/mocks/mock-axios.ts:14](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/mocks/mock-axios.ts#L14)*

MockAxios is merely a typed wrapper around the dynamically
mocked __mocks__/axios implementation.

## Variables

### `Const` AxiosResponseFactory

• **AxiosResponseFactory**: *IFactory‹AxiosResponse‹any, any››* = Factory.define<AxiosResponse>(
    FactoryType.AxiosResponse
)
    .sequence("status", () => 200)
    .sequence("statusText", () => "OK")

*Defined in [src/factories/axios-response-factory.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/factories/axios-response-factory.ts#L9)*

___

### `Const` StubResourceRecordFactory

• **StubResourceRecordFactory**: *IFactory‹[StubResourceRecord](classes/stubresourcerecord.md)‹››* = Factory.define<StubResourceRecord>(
    FactoryType.StubResourceRecord,
    StubResourceRecord
)
    .sequence("id", (i: number) => i)
    .sequence("name", (i: number) => `Name ${i}`)

*Defined in [src/factories/stub-resource-record-factory.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/factories/stub-resource-record-factory.ts#L9)*

## Functions

### `Const` _mockSuccess

▸ **_mockSuccess**(`method`: [AxiosJestMock](README.md#axiosjestmock), `resultObject`: any | any[], `delay?`: undefined | number): *void*

*Defined in [src/mocks/mock-axios.ts:88](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/mocks/mock-axios.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [AxiosJestMock](README.md#axiosjestmock) |
`resultObject` | any &#124; any[] |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` _resultObjectToJS

▸ **_resultObjectToJS**(`resultObject`: any | any[]): *any | any[]*

*Defined in [src/mocks/mock-axios.ts:113](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/mocks/mock-axios.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`resultObject` | any &#124; any[] |

**Returns:** *any | any[]*

___

### `Const` deleteSuccess

▸ **deleteSuccess**(`record?`: any, `delay?`: undefined | number): *void*

*Defined in [src/mocks/mock-axios.ts:67](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/mocks/mock-axios.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`record?` | any |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` getSuccess

▸ **getSuccess**(`record`: any, `delay?`: undefined | number): *void*

*Defined in [src/mocks/mock-axios.ts:70](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/mocks/mock-axios.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`record` | any |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` listSuccess

▸ **listSuccess**(`records`: any[], `delay?`: undefined | number): *void*

*Defined in [src/mocks/mock-axios.ts:73](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/mocks/mock-axios.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`records` | any[] |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` postSuccess

▸ **postSuccess**(`record`: any, `delay?`: undefined | number): *void*

*Defined in [src/mocks/mock-axios.ts:76](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/mocks/mock-axios.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`record` | any |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` putSuccess

▸ **putSuccess**(`record`: any, `delay?`: undefined | number): *void*

*Defined in [src/mocks/mock-axios.ts:79](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/mocks/mock-axios.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`record` | any |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` testLoop

▸ **testLoop**(`name`: string, `fn`: Function, `times`: number): *void*

*Defined in [src/utilities/shared-specs.ts:14](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/utilities/shared-specs.ts#L14)*

Utility function for running a test body a certain number of times. Useful for ensuring specific
behavior on implementations that return randomized data and edge cases will not immediately be
exposed.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`name` | string | - | Name of the test |
`fn` | Function | - | Function body to run (can be asynchronous) |
`times` | number | 100 | - |

**Returns:** *void*

## Object literals

### `Const` FactoryType

### ▪ **FactoryType**: *object*

*Defined in [src/factories/factory-type.ts:1](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/factories/factory-type.ts#L1)*

###  AxiosResponse

• **AxiosResponse**: *string* = "AxiosResponse"

*Defined in [src/factories/factory-type.ts:2](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/factories/factory-type.ts#L2)*

###  StubResourceRecord

• **StubResourceRecord**: *string* = "StubResourceRecord"

*Defined in [src/factories/factory-type.ts:3](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/factories/factory-type.ts#L3)*

___

### `Const` MockAxios

### ▪ **MockAxios**: *object*

*Defined in [src/mocks/mock-axios.ts:135](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/mocks/mock-axios.ts#L135)*

###  delete

• **delete**: *Mock‹Promise‹object›, []›* = axios.delete as AxiosJestMock

*Defined in [src/mocks/mock-axios.ts:136](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/mocks/mock-axios.ts#L136)*

###  deleteSuccess

• **deleteSuccess**: *[deleteSuccess](README.md#const-deletesuccess)*

*Defined in [src/mocks/mock-axios.ts:137](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/mocks/mock-axios.ts#L137)*

###  get

• **get**: *Mock‹Promise‹object›, []›* = axios.get as AxiosJestMock

*Defined in [src/mocks/mock-axios.ts:138](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/mocks/mock-axios.ts#L138)*

###  getSuccess

• **getSuccess**: *[getSuccess](README.md#const-getsuccess)*

*Defined in [src/mocks/mock-axios.ts:139](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/mocks/mock-axios.ts#L139)*

###  listSuccess

• **listSuccess**: *[listSuccess](README.md#const-listsuccess)*

*Defined in [src/mocks/mock-axios.ts:140](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/mocks/mock-axios.ts#L140)*

###  post

• **post**: *Mock‹Promise‹object›, []›* = axios.post as AxiosJestMock

*Defined in [src/mocks/mock-axios.ts:141](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/mocks/mock-axios.ts#L141)*

###  postSuccess

• **postSuccess**: *[postSuccess](README.md#const-postsuccess)*

*Defined in [src/mocks/mock-axios.ts:142](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/mocks/mock-axios.ts#L142)*

###  put

• **put**: *Mock‹Promise‹object›, []›* = axios.put as AxiosJestMock

*Defined in [src/mocks/mock-axios.ts:143](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/mocks/mock-axios.ts#L143)*

###  putSuccess

• **putSuccess**: *[putSuccess](README.md#const-putsuccess)*

*Defined in [src/mocks/mock-axios.ts:144](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/mocks/mock-axios.ts#L144)*

___

### `Const` TestUtils

### ▪ **TestUtils**: *object*

*Defined in [src/utilities/test-utils.ts:3](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/utilities/test-utils.ts#L3)*

###  faker

• **faker**: *Faker‹›*

*Defined in [src/utilities/test-utils.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/utilities/test-utils.ts#L8)*

###  randomCase

▸ **randomCase**(`value`: string): *string*

*Defined in [src/utilities/test-utils.ts:19](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/utilities/test-utils.ts#L19)*

Randomize case of string

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *string*

###  randomFilename

▸ **randomFilename**(): *string*

*Defined in [src/utilities/test-utils.ts:33](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/utilities/test-utils.ts#L33)*

Wrapper around `faker.system.fileName`

**Returns:** *string*

###  randomGuid

▸ **randomGuid**(): *string*

*Defined in [src/utilities/test-utils.ts:40](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/utilities/test-utils.ts#L40)*

Wrapper around `faker.datatype.uuid`

**Returns:** *string*

###  randomKey

▸ **randomKey**(`obj`: object): *string*

*Defined in [src/utilities/test-utils.ts:47](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/utilities/test-utils.ts#L47)*

Returns a random key from the given object. If the object has no keys, it returns `undefined`.

**Parameters:**

Name | Type |
------ | ------ |
`obj` | object |

**Returns:** *string*

###  randomObject

▸ **randomObject**(`keyCount?`: undefined | number): *[Record](classes/stubresourcerecord.md#static-record)‹string, string›*

*Defined in [src/utilities/test-utils.ts:54](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/utilities/test-utils.ts#L54)*

Generates random object

**Parameters:**

Name | Type |
------ | ------ |
`keyCount?` | undefined &#124; number |

**Returns:** *[Record](classes/stubresourcerecord.md#static-record)‹string, string›*

###  randomPath

▸ **randomPath**(): *string*

*Defined in [src/utilities/test-utils.ts:68](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/utilities/test-utils.ts#L68)*

Generates random path

**Returns:** *string*

###  randomValue

▸ **randomValue**‹**TValue**›(`obj`: [Record](classes/stubresourcerecord.md#static-record)‹string, TValue› | Array‹TValue›): *TValue*

*Defined in [src/utilities/test-utils.ts:75](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/utilities/test-utils.ts#L75)*

Returns a random value from the given object. If the object has no keys, it returns `undefined`.

**Type parameters:**

▪ **TValue**

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [Record](classes/stubresourcerecord.md#static-record)‹string, TValue› &#124; Array‹TValue› |

**Returns:** *TValue*

###  randomWord

▸ **randomWord**(): *string*

*Defined in [src/utilities/test-utils.ts:91](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/utilities/test-utils.ts#L91)*

Wrapper of faker.random.word.

Unfortunately there is an unresolved bug https://github.com/Marak/faker.js/issues/661
and it will occasionally return multiple which can cause test flake

**Returns:** *string*

###  randomWords

▸ **randomWords**(): *string[]*

*Defined in [src/utilities/test-utils.ts:101](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Testing/blob/3b27039/src/utilities/test-utils.ts#L101)*

Returns a string array of at least two random words, leveraging the `TestUtils.randomWord` function

**Returns:** *string[]*
