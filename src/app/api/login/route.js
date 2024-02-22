// Import necessary modules
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Define the POST handler for the login API endpoint
async function POST(request) {
    try {
        // Extract email and password from request body
        const { email, password } = await request.json();
console.log("email",email);
        // Query the user with the provided email
        const user = await prisma.User.findUnique({
            where: {
                email:email,
            },
        });

        // If user is not found, return 404 Not Found response
        if (!user) {
            return new NextResponse("Email not found", {
                status: 404,
            });
        }

        // If password doesn't match, return 401 Unauthorized response
        if (user.password !== password) {
            return new NextResponse("Invalid password", {
                status: 401,
            });
        }

        // If user and password are correct, return user data with 200 OK response
        return new NextResponse(JSON.stringify(user), {
            status: 200,
            // headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        // Handle any unexpected errors and return 500 Internal Server Error response
        console.error("Error logging in:", error);
        return new NextResponse("Internal Server Error", {
            status: 500,
        });
    }
}

// Export the POST handler
export { POST };
