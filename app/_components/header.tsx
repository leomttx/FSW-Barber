import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

const Header = () => {
    return ( 
        <Card>
            <CardContent className="p-5 justify-between itens-center flex flex-row">
                <Image src="/Logo.png" alt="fswbarber" height={22} width={120}/>
                <Button variant="outline" size="icon" className="h-6 w-6">
                    <MenuIcon size={18}/>
                </Button>
            </CardContent>
        </Card>
     );
}
 
export default Header;