import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Simple in-memory Redis adapter interface
interface MemoryRedisAdapter {
  sadd: (key: string, ...members: string[]) => Promise<number>;
  eval: () => Promise<[number, unknown[]]>;
  get: (key: string) => Promise<unknown>;
  set: (key: string, value: unknown) => Promise<string>;
  incr: (key: string) => Promise<number>;
  expire: (key: string, seconds: number) => Promise<number>;
}

// Create rate limiter instance
// This will use Upstash Redis if environment variables are configured
// Otherwise, it will gracefully handle the case where Redis is not available
export function createRateLimiter() {
  // Check if Upstash Redis credentials are available
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!redisUrl || !redisToken) {
    console.warn('Upstash Redis credentials not found. Rate limiting will use in-memory storage (not recommended for production).');
    
    // Create an in-memory map for development/testing
    const cache = new Map();
    
    // Create a simple in-memory Redis adapter
    const memoryRedis: MemoryRedisAdapter = {
      sadd: async (key: string, ...members: string[]) => {
        const set = cache.get(key) || new Set();
        members.forEach(m => set.add(m));
        cache.set(key, set);
        return set.size;
      },
      eval: async () => {
        return [1, []]; // Simple mock
      },
      get: async (key: string) => {
        return cache.get(key);
      },
      set: async (key: string, value: unknown) => {
        cache.set(key, value);
        return 'OK';
      },
      incr: async (key: string) => {
        const val = (cache.get(key) as number || 0) + 1;
        cache.set(key, val);
        return val;
      },
      expire: async (key: string, seconds: number) => {
        setTimeout(() => cache.delete(key), seconds * 1000);
        return 1;
      },
    };
    
    return new Ratelimit({
      redis: memoryRedis as unknown as Redis,
      limiter: Ratelimit.slidingWindow(5, '60 s'), // 5 requests per 60 seconds
      analytics: true,
      prefix: '@upstash/ratelimit',
    });
  }

  // Create rate limiter with Upstash Redis
  const redis = new Redis({
    url: redisUrl,
    token: redisToken,
  });

  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, '60 s'), // 5 requests per 60 seconds
    analytics: true,
    prefix: '@upstash/ratelimit',
  });
}

// Helper function to get IP address from request
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIp) {
    return realIp;
  }
  
  return 'unknown';
}
