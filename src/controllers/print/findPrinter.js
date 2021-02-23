const findingPrinters = ({findPrinters}) => {
    return async function get(httpRequest) {
        const headers = {
          "Content-Type": "application/json"
        };
        try {
          //get the httprequest body
          const { source = {}, ...info } = httpRequest.body;
          source.ip = httpRequest.ip;
          source.browser = httpRequest.headers["User-Agent"];
          info.cookie = httpRequest.headers["Cookie"]; // add cookie to req body
          if (httpRequest.headers["Referer"]) {
            source.referrer = httpRequest.headers["Referer"];
          }
          const toView = {
            ...info,
            source
          };
          const view = await findPrinters(toView);
          return {
            headers: {
              "Content-Type": "application/json"
            },
            statusCode: 200,
            body: { view }
          };
        } catch (e) {
          // TODO: Error logging
          console.log(e);
          return {
            headers,
            statusCode: 400,
            body: {
              error: e.message
            }
          };
        }
      };
}
module.exports = findingPrinters