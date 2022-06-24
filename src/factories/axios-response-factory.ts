import { Factory } from "rosie";
import { FactoryType } from "./factory-type";
import { AxiosResponse } from "axios";
import { FactoryBuilder } from "factories/factory-builder";

// -----------------------------------------------------------------------------------------
// #region Factory
// -----------------------------------------------------------------------------------------

const AxiosResponseFactoryBuilder: FactoryBuilder<AxiosResponse> = (factory) =>
    factory
        .define<AxiosResponse>(FactoryType.AxiosResponse)
        .sequence("status", () => 200)
        .sequence("statusText", () => "OK");

const AxiosResponseFactory = AxiosResponseFactoryBuilder(Factory);

// #endregion Factory

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { AxiosResponseFactory, AxiosResponseFactoryBuilder };

// #endregion Export
