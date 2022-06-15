import rateLimiter from "express-rate-limit";

export const loginRateLimit = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
});
