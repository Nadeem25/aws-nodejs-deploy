import { configuration } from '../config.js'

class CreateResponse {

    sendResponse(res, responseObj) {
        try {
            res.status(configuration.httpStatus.ok);
            res.send(responseObj);
        } catch (error) {
            throw error;
        }
    }

}
export default CreateResponse;