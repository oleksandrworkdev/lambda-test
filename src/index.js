function handler(event, context, callback) {
    let text = "Count how many characters in dev";
    let length = text.length;

    callback(null, {
        statusCode: 200,
        body: length,
    });

}
module.exports = {handler};