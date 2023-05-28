import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    let param = Number(event.context.params?.id)
    const body = await readBody(event)
    let result = null

    if(body){
        await prisma.user.update({
            where: {
                id: param,
            },
            data:{
                name: body.name,
                email: body.email
            }
        }).then((res) => {
            result = {
                data: res
            }
        }).catch((e) => {
            result = e
        })
    }

    return result
})