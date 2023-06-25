import type { NextApiRequest, NextApiResponse } from "next";

import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";
import { PageInfo } from "@/types";

const query = groq`*[_type == "pageInfo"][0]`;
// const query = groq`*[_type == "pageInfo"][0]{...,socials[] ->}`;

export async function GET(req: Request) {
  try {
    const pageInfo: PageInfo[] = await client.fetch(query);

    return NextResponse.json({ pageInfo });
  } catch (error) {
    return new NextResponse("Internal Error");
  }
}
