import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

async function GET(request) {
    const users = await prisma.User.findMany();
    return NextResponse.json(users);
}

async function POST(request) {
    try {
        const json = await request.json();
        const emailExist = await prisma.User.findUnique({
            where: {
                email: json.email,
            },
        });
        if (emailExist) {
            return new NextResponse("User with email already exists", {
                status: 404,
                message:"User with email already exists"
            });
        }
        const user = await prisma.User.create({
            data: json,
        });

        return new NextResponse(JSON.stringify(user), {
            status: 201,
            // headers: { "Content-Type": "application/json" },
            data: user
        });
    } catch (error) {
        console.log("error", error);
        if (error.code === "P2002") {
            return new NextResponse("User with email already exists", {
                status: 409,
            });
        }
        return new NextResponse(error.message, { status: 500 });
    }
}

export {
    GET,
    POST

}
// module.exports = {
//     GET,
//     POST
// };
