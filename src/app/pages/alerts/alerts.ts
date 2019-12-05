export interface Alerts {
      id: number;
      created: number;
      updated: number;
      deleted: boolean;
      modelName: string;
      competitorLinkId: number;
      oldPrice: number;
      oldPriceTime: number;
      newPrice: number;
      status: number;
      statusChangeBy: number;
      statusChangeTime: number;
      competitorLink: {
        id: number,
        created: number,
        updated: number,
        deleted: boolean,
        modelName: string,
        competitorId: number,
        brandId: number,
        skuId: string,
        url: string,
        lastSearch: number,
        status: number,
        brand: string,
        price: number,
        quantity: string,
      };
}
