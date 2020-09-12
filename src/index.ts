export default function errorResponse(statusCode: number, message: string) {
    return {
        status: statusCode,
        message: message
    }
}