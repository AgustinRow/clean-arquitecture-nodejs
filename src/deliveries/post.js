module.exports.postDream = async event => {
  try {
    console.log(event);
    return {
      statusCode: 200,
      body: JSON.stringify({ dream: event.body }),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 400,
      body: JSON.stringify({ err }),
    };
  }
};
