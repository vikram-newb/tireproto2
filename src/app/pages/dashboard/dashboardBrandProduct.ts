export interface DashboardBrandProduct {
    Sku: string,
    ProductName: string,
    OurPrice: number,
    Quantity: string,
    SellerInfo: [
        {
          SellerId: number,
          SellerPrice: number,
          SellerUrl: string,
          SellerSold: number,
          PriceState: number
        }
      ] 
}