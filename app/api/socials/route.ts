import type { NextApiRequest, NextApiResponse } from "next";

import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";
import { Social } from "@/types";

const query = groq`*[_type == "social"]{...,}`;

export async function GET(req: Request) {
  try {
    const socials: Social[] = await client.fetch(query);

    return NextResponse.json({ socials });
  } catch (error) {
    return new NextResponse("Internal Error");
  }
}
