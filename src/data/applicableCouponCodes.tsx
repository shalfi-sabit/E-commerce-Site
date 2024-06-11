type CouponCodes = "RATUL30" | "SAKIB20" | "SABIT15";

const applicableCouponCodes: Record<CouponCodes, number> = {
  RATUL30: 30,
  SAKIB20: 20,
  SABIT15: 15,
};

export default applicableCouponCodes;
