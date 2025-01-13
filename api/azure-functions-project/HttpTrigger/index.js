module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a request.');

    const name = req.query.name || (req.body && req.body.name);
    const responseMessage = name
        ? `Hello, ${name}. This is your HTTP triggered function.`
        : 'Hello, this is your HTTP triggered function. Please pass a name on the query string or in the request body.';

    context.res = {
        status: 200,
        body: responseMessage
    };
};