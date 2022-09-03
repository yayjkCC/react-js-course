type BaseState = {
    isAuthorized: boolean | null;
};

type CatalogState = {
    products: Array<any>;
};

export { BaseState, CatalogState };
