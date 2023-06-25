import type { NextApiRequest, NextApiResponse } from "next";

import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";
import { Skill } from "@/types";

const query = groq`*[_type == "skill"]{...,}`;

export async function GET(req: Request) {
  try {
    const skills: Skill[] = await client.fetch(query);

    return NextResponse.json({ skills });
  } catch (error) {
    return new NextResponse("Internal Error");
  }
}
