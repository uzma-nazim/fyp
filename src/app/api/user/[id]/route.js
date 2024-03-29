const { prisma } = require("@/lib/prisma");
const { NextResponse } = require("next/server");

async function GET(request, { params }) {
    const id = params.id;
    const user = await prisma.User.findUnique({
        where: {
            id,
        },
    });

    if (!user) {
        return new NextResponse("No user with ID found", { status: 404 });
    }

    return NextResponse.json(user);
}

async function PUT(request, { params }) {
    const id = params.id;
    let json = await request.json();

    const updated_user = await prisma.User.update({
        where: { id },
        data: json,
    });

    if (!updated_user) {
        return new NextResponse("No user with ID found", { status: 404 });
    }

    return NextResponse.json(updated_user);
}

async function DELETE(request, { params }) {
    try {
        const id = params.id;
        await prisma.User.delete({
            where: { id },
        });

        return new NextResponse(null, { status: 204 });
    } catch (error) {
        if (error.code === "P2025") {
            return new NextResponse("No user with ID found", { status: 404 });
        }

        return new NextResponse(error.message, { status: 500 });
    }
}

export {
    GET,
    PUT,
    DELETE,
};
