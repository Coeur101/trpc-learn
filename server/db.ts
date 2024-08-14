type User = { id: string, name: string }
const users: User[] = []
export const db = {
  user: {
    findMany: async () => users,
    findById: async (id: string) => users.find(item => item.id === id),
    create: async (data: { name: string }) => {
      const user = { id: String(users.length + 1), name: data.name }
      users.push(user)
      return user
    }
  }
}
