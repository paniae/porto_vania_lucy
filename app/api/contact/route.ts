import { NextResponse } from "next/server";
import { ContactSubmission } from "@/types/portfolio";

// In-memory store for demo inquiries
const submissions: ContactSubmission[] = [
  {
    id: "sub-1",
    name: "Elena Rostova",
    email: "elena@company.com",
    projectScope: "Looking for a full revamp of our SaaS web application design and Next.js frontend architecture.",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  }
];

export async function GET() {
  return NextResponse.json({
    status: "ok",
    totalSubmissions: submissions.length,
    data: submissions.slice(-10).reverse(), // Return latest 10 submissions
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectScope } = body || {};

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!projectScope || typeof projectScope !== "string" || projectScope.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please describe your project requirements (at least 5 characters)." },
        { status: 400 }
      );
    }

    const newSubmission: ContactSubmission = {
      id: `sub-${Date.now()}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      projectScope: projectScope.trim(),
      createdAt: new Date().toISOString(),
    };

    submissions.push(newSubmission);

    return NextResponse.json(
      {
        success: true,
        message: `Thank you, ${newSubmission.name}! Your message has been prepared for Vania Lucy Syntya (vanialucysyntya42@gmail.com). I'll get back to you within 24 hours.`,
        data: {
          id: newSubmission.id,
          createdAt: newSubmission.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while sending your message. Please try again." },
      { status: 500 }
    );
  }
}
