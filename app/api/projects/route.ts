import type { NextApiRequest, NextApiResponse } from "next";

import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";
import { Project } from "@/types";

const query = groq`*[_type == "project"]{..., technologies[] ->}`;

export async function GET(req: Request) {
  try {
    const projects: Project[] = await client.fetch(query);

    return NextResponse.json({ projects });
  } catch (error) {
    return new NextResponse("Internal Error");
  }
}
