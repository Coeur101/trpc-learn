import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../server";

const trpc = createTRPCProxyClient<AppRouter>({
  // tRPC 中的链接与 GraphQL 中的链接类似，它们让我们在发送到服务器之前控制数据流
  //  httpBatchLink，它自动将多个调用批量处理为单个 HTTP 请求
  links: [httpBatchLink({
    url: "http://localhost:3111"
  })]
})
const main = async () => {
  const createUser = await trpc.userCreate.mutate({ name: "testUser" })
  console.log(createUser);
  const users = await trpc.userList.query()
  console.log(users);
  const getUser = await trpc.userById.query("1")
  console.log(getUser);
}
main().catch(console.error)
