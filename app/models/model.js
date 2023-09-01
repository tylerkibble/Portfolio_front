module.exports = mongoose => {
  const doc = mongoose.model(
    "mydatabase",
    mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean
      },
      { timestamps: true }
    )
  );

  return doc;
};