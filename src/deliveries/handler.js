module.exports.health = async () => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify('Hello word'),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 400,
      body: JSON.stringify(err),
    };
  }
};
