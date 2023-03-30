import decodeOpaqueId from "@reactioncommerce/api-utils/decodeOpaqueId.js";
export default {
  async getPropertyRates(parent, args, context, info) {
    try {
      let { ProductRate } = context.collections;
      let productRateResults = [];

      //let filter = { createdBy: byUser };

      productRateResults = await ProductRate.find({}).toArray();
      console.log(productRateResults);
      return productRateResults;
    } catch (err) {
      console.log("get product rate error ", err);
    }
  },
};
