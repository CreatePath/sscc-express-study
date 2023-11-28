class ErrorResponse {
    static customError(res, status, message = null, data = null) {
        return res.status(status).json({
            message,
            data,
        });
    }

    static wrongRequest(res, message="잘못된 요청입니다.") {
        return res.status(400).json({
            message
        });
    }

    static isConflict(res, message="이미 존재합니다.") {
        return res.status(409).json({
            message
        });
    }

    static NotFound(res, message="요청하신 데이터를 찾을 수 없습니다.") {
        return res.status(404).json({
            message
        });
    }


}

module.exports = ErrorResponse;