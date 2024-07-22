import { UserButton } from "@clerk/nextjs";

export default function Home() {
    return ( 
        <>

        <h1>
            Binevenido usuario
        </h1>

        <UserButton />

        </>
     )
}