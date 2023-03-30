export default {
  async createProductRate(parent, args, context, info) {
    try {
      let { sellerFee, buyerFee, productType } = args.input;

      let { ProductRate } = context.collections;

      let { auth, authToken, userId } = context;

      //   if (!authToken || !userId) return new Error("Unauthorized");

      console.log("Data is ", sellerFee, buyerFee, productType);

      const filter = {
        productType,
      };
      const update = {
        $set: {
          buyerFee,
          sellerFee,
        },
        $setOnInsert: {
          productType,
        },
      };
      const options = { upsert: true, returnOriginal: false };
      const rate = await ProductRate.findOneAndUpdate(filter, update, options);

      //   const rate = await ProductRate.insertOne(
      //     {
      //       sellerFee,
      //       buyerFee,
      //       productType,
      //     },
      //     {
      //       upsert: true,
      //     }
      //   );
      if (rate) {
        console.log("Rate is ", rate);
        return true;
      }
      throw new Error("Error creating product Rate");
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
