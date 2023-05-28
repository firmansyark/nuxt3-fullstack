import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    let result = null
    
    await prisma.user.findMany()
    .then((res)=>{
        result = {
            data: res
        }
    }).catch((e)=>{
        result = e
    })

    return result
})