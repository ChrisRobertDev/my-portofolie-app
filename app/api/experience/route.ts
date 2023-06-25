import type { NextApiRequest, NextApiResponse } from "next";

import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";
import { Experience } from "@/types";

const query = groq`*[_type == "experience"]{..., technologies[] ->}`;

export async function GET(req: Request) {
  try {
    const experiences: Experience[] = await client.fetch(query);

    return NextResponse.json({ experiences });
  } catch (error) {
    return new NextResponse("Internal Error");
  }
}
