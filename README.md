# client-node-with-admin
```
[Git Link](https://github.com/uyendo0203/client-node-with-admin) 
```
```
[Vercel Link](https://vercel.com/uyendo0203s-projects/client-node-with-admin) 
```


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```



Biến môi trường bắt đầu bằng NEXT_PUBLIC_ sẽ có thể truy cập từ phía client (trình duyệt).
Những biến không bắt đầu bằng NEXT_PUBLIC_ chỉ có thể được truy cập từ phía server.

# Deploy

Step 1: push git
```
git add . (commit data)
git commit -m 'xxx' (commit with comment)
git pull
git push
```

Step 2: Deploy to vercel
```
vercel --prod
```