module.exports.getDream = async event => {
  try {
    console.log(event);
    return {
      statusCode: 200,
      body: JSON.stringify({ dream: event.pathParameters.id }),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 400,
      body: JSON.stringify({ err }),
    };
  }
};
