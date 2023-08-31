module.exports = mongoose => {
  const Tutorial = mongoose.model(
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

  return Tutorial;
};