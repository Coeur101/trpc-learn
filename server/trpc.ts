import { initTRPC } from "@trpc/server";
// 初始化trpc后端
const t = initTRPC.create()
// 导出辅助函数 路由等
export const router = t.router
export const publicProcedure = t.procedure
