export interface Product {
  id: string;
  title: string;
  location: string;
  bidInfo: {
    bidPrice: number;
    buyNowPrice: number;
  };
  backgroundImageLink: string;
  isReserve: boolean;
  type: string;
  promotion: string;
};

export function generateMockProduct(): Product {
  return {
    id: '1',
    title: 'MockProduct',
    location: 'MockLocation',
    bidInfo: {
      bidPrice: 99.99,
      buyNowPrice: 199.99,
    },
    backgroundImageLink: 'MockLink',
    isReserve: true,
    type: 'Featured jobs',
    promotion: 'Save 10%',
  };
}