import { cookies } from "next/headers";

export default function Home() {
  return (
    <form
      action={async () => {
        "use server";
        console.log(cookies().get("random_string"));
      }}
    >
      <button type="submit">action</button>
    </form>
  );
}
