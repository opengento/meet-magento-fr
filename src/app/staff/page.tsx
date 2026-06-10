'use client';

import Staff from "@/layouts/Staff/Staff";
import Push from "@/layouts/Push/Push";
import Container from "@/layouts/Container";

export default function Page() {
  return (
    <>
      <Staff/>
      <Container className="flex flex-col gap-8 my-8">
        <Push />
      </Container>
    </>
  );
}
