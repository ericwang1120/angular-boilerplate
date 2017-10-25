export interface SingleListing {
    ListingId: number;
    Title: string;
    Category: string;
    StartPrice: number;
    BuyNowPrice: number;
    StartDate: string;
    EndDate: string;
    ListingLength: number;
    IsFeatured: boolean;
    HasGallery: boolean;
    MaxBidAmount: number;
    AsAt: string;
    CategoryPath: string;
    PictureHref: string;
    Region: string;
    Suburb: string;
    BidCount: number;
    IsReserveMet: boolean;
    HasReserve: boolean;
    NoteDate: string;
    ReserveState: number;
    PriceDisplay: string;
    PromotionId: number;
    AdditionalData: {
        BulletPoints: any[];
        Tags: any[];
    };
}
