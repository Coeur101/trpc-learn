import { createHTTPServer } from "@trpc/server/adapters/standalone";
import appRouter from './router'
// 创建后端服务
const serve = createHTTPServer({
  router: appRouter
})
export type AppRouter = typeof appRouter
serve.listen(3111)
