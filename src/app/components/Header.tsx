import Link from "next/link";
import { getUser, signOut } from "@workos-inc/authkit-nextjs";
import { getSignInUrl } from "@workos-inc/authkit-nextjs";

export default async function Header() {
    const { user } = await getUser();
    const signInUrl = await getSignInUrl();
    return (
        <header>

            <div className="container flex items-center justify-between mx-auto my-4">
                <Link href={'/'} className="font-bold text-xl">Job Board</Link>
                <nav className="flex gap-2 ">
                    {!user && (
                        <Link className="bg-blue-200 rounded-md py-2 px-4" href={signInUrl}>Login</Link>
                    )}

                    {user && (
                        <form action={async () => {
                            'use server';
                            await signOut();
                          }}>
                            <button type="submit" className="bg-blue-200 rounded-md py-2 px-4">
                                Logout
                            </button>
                        </form>
                        
                    )}
                    <Link className="bg-blue-600 rounded-md py-2 px-4 text-white" href={'/newlisting'}>
                    Post Jobs
                    </Link>
                </nav>
            </div>
        </header>);
}