import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    let param = Number(event.context.params?.id)
    let result = null
    
    await prisma.user.delete({
        where: {
            id: param,
        },
    }).then((res) => {
        result = {
            data: res
        }
    }).catch((e) => {
        result = e
    })

    return result
})