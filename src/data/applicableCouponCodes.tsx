type CouponCodes = "RATUL30" | "SAKIB20" | "SABIT15";

const applicableCouponCodes: Record<
  CouponCodes,
  { discount: number; minimumAmount: number }
> = {
  RATUL30: {
    discount: 30,
    minimumAmount: 10000,
  },
  SAKIB20: {
    discount: 20,
    minimumAmount: 5000,
  },
  SABIT15: {
    discount: 15,
    minimumAmount: 3000,
  },
};

export default applicableCouponCodes;
