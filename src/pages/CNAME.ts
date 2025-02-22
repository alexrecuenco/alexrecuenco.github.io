import { SITE_URL } from "../consts";

export async function GET() {
    return new Response(
        SITE_URL,
    )
  }
