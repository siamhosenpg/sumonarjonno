# Sumona ♥ — Love Page

## চালানোর নিয়ম

```bash
npm install
npm run dev
```

তারপর `http://localhost:3000` ওপেন করো।

## নিজের মতো সাজাবি যেভাবে

1. **লেখা / তারিখ / চিঠি** — সব `data/content.js` ফাইলে। নাম, timeline, reasons, letter — সব এখানে বদলাতে পারবি, কম্পোনেন্ট কোডে হাত দেওয়ার দরকার নেই।
2. **ছবি** — `public/images/` ফোল্ডারে ছবি রাখ, নাম মিলিয়ে `data/content.js`-এ বসিয়ে দে (যেমন `story-1.jpg`, `gallery-1.jpg`)। ছবি না পেলে ওই জায়গায় "ছবি বসাও" লেখা প্লেসহোল্ডার দেখাবে, সাইট ভাঙবে না।
3. **রং** — `tailwind.config.js`-এ `colors` অংশে (`paper`, `ink`, `wine`, `rose`, `blush`, `gold`) বদলে দিলে পুরো থিমের রং বদলে যাবে।

## Deploy

Vercel-এ push করলেই ফ্রিতে হোস্ট হয়ে যাবে — `vercel.com` → GitHub repo connect → deploy।
