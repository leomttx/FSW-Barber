"use client";



import { Card, CardContent } from "@/app/_components/ui/card";
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, MenuIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {

    const handleLogoutClick = () => signOut();

    const {data, status} = useSession();

    const handleLoginClick = () => signIn("google");

    return ( 
        <Card>
            <CardContent className="p-5 justify-between itens-center flex flex-row">
                <Image src="/Logo.png" alt="fswbarber" height={22} width={120}/>
                <Sheet>
                    <SheetTrigger>
                        <Button variant="outline" size="icon">
                            <MenuIcon size={16}/>
                        </Button>
                    </SheetTrigger>
                    
                    <SheetContent className="p-0">
                        <SheetHeader className="text-left border-b border-solid border-secondary p-5 ">
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>

                        {data?.user ? (
                            <div className="flex justify-between px-5 py-6 items-center">
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarImage src={data.user?.image ?? ""}/>
                                    </Avatar>

                                    <h2 className="font-bold">{data.user.name}</h2>
                                </div>


                                <Button variant="secondary" size="icon">
                                    <LogOutIcon onClick={handleLogoutClick}/>
                                </Button>

                                
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3 px-5 py-6">
                                <div className="flex items-center gap-2">
                                    <UserIcon size={32}/>
                                    <h2 className="font-bold">Olá, faça seu login!</h2>
                                </div>

                                <Button variant="secondary" className="w-full" onClick={handleLoginClick}>
                                    <LogInIcon className="mr-2" size={18} />
                                    Fazer Login
                                </Button>
                            </div>
                        )}

                        <div className="flex flex-col gap-3 px-5">
                            <Button variant="outline" className="" asChild>
                                    <Link href="/">
                                        <HomeIcon size={18} className="mr-2"/>
                                        Inicio
                                    </Link>
                                </Button>

                            {data?.user && (
                                <Button variant="outline" className="" asChild>
                                    <Link href="/bookings">
                                        <CalendarIcon size={18} className="mr-2"/>
                                        Agendamentos
                                    </Link>
                                </Button>
                            )}
                        </div>

                    </SheetContent>
                </Sheet>
            </CardContent>
        </Card>
     );
}
 
export default Header;