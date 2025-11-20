# Carify Health - API Documentation

## Base URL
- Development: `http://localhost:5000/api`
- Production: `https://your-domain.com/api`

## Authentication
The API uses session-based authentication. Include session cookies with requests.

## Endpoints

### Health Check
```
GET /api/health
```
Returns server health status.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### Demo Requests
```
POST /api/demo
```
Submit a demo request form.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "company": "string",
  "phone": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Demo request submitted successfully"
}
```

## Error Handling

All API endpoints return consistent error responses:

```json
{
  "error": true,
  "message": "Error description",
  "code": "ERROR_CODE"
}
```

### HTTP Status Codes
- `200` - Success
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## Rate Limiting
API requests are rate-limited to prevent abuse:
- 100 requests per minute per IP
- 1000 requests per hour per authenticated user

## Data Validation
All request data is validated using Zod schemas. Invalid data returns a 400 error with validation details.