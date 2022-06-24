import { FactoryBuilder } from "factories/factory-builder";
import { Factory } from "rosie";
import { StubResourceRecord } from "../stubs/stub-resource-record";
import { FactoryType } from "./factory-type";

// -----------------------------------------------------------------------------------------
// #region Factory
// -----------------------------------------------------------------------------------------

const StubResourceRecordFactoryBuilder: FactoryBuilder<StubResourceRecord> = (
    factory
) =>
    factory
        .define<StubResourceRecord>(
            FactoryType.StubResourceRecord,
            StubResourceRecord
        )
        .sequence("id", (i: number) => i)
        .sequence("name", (i: number) => `Name ${i}`);

const StubResourceRecordFactory = StubResourceRecordFactoryBuilder(Factory);

// #endregion Factory

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { StubResourceRecordFactory, StubResourceRecordFactoryBuilder };

// #endregion Export
