module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET',"JWTSecret=="),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT',"APITokenSalt=="),
  },
});
