import { z } from "zod";
import { publicProcedure } from "./trpc";
import { TRPCError } from "@trpc/server";

// 模拟权限认证的拦截器
export const authorizedProcedure = publicProcedure.input(z.object({
  token: z.string()
})).use((opts) => {
  if (opts.input.token !== 'admin') {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "权限不足"
    })
  }
  return opts.next()
})
