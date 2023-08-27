import { headers } from "next/headers";

export default async function Home() {
  const authorizationHeader = headers().get("Authorization")?.split(" ")[1];
  console.log(authorizationHeader);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p>Hei, jeg kjører på din maskin og bruker Wonderwall.</p>
      <pre>
        Token:{" "}
        {authorizationHeader
          ? JSON.stringify(
              JSON.parse(
                Buffer.from(
                  authorizationHeader.split(".")[1],
                  "base64"
                ).toString()
              )
            )
          : "No token, try logging in."}
      </pre>
      {!authorizationHeader && (
        <form action="/oauth2/login">
          <input type="submit" name="" id="login" value="login" />
        </form>
      )}
      {authorizationHeader && (
        <form action="/oauth2/logout">
          <input type="submit" name="" id="logout" value="logout" />
        </form>
      )}
    </main>
  );
}
