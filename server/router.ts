import { z } from "zod";
import { db } from "./db";
import { publicProcedure, router } from "./trpc";
// 初始化路由实例
export default router({
  // 实现各种方法来让客户端调用
  // 获取所有用户
  userList: publicProcedure.query(async () => {
    const users = await db.user.findMany()
    return users
  }),
  // 获取特定id的用户
  userById: publicProcedure.input(z.string()).query(async (opt) => {
    // 这里的input就是上方被zod数据校验过的字符串
    const { input } = opt
    const user = await db.user.findById(input)
    return user
  }),
  // 创建用户
  userCreate: publicProcedure.input(z.object({
    name: z.string()
  })).mutation(async (opt) => {
    const { input } = opt
    const user = await db.user.create(input)
    return user
  })
})
