import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    let result = null
    
    if(body){
        await prisma.user.create({
            data: {
                name: body.name,
                email: body.email
            },
        }).then((res)=>{
            result = {
                data: res
            }
        }).catch((e)=>{
            result = e
        })
    }

    return result
})