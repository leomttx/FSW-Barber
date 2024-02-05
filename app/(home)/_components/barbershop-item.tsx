"use client";

import { Card, CardContent } from '@/app/_components/ui/card';
import { Barbershop } from '@prisma/client';   
import Image from 'next/image';
import { Badge } from '@/app/_components/ui/badge';
import { StarIcon } from 'lucide-react';
import { Button } from '@/app/_components/ui/button';
import { useRouter } from 'next/navigation';

interface BarbershopItemProps {
    barbershop: Barbershop;

}

const BrabershopItem = ({barbershop}: BarbershopItemProps) => {

    // useRouter é um hook do Next.js que permite acessar o objeto router.
    // O objeto router contém informações sobre a rota atual (como o caminho da URL, parâmetros de consulta) e permite a navegação programática para outras rotas.
    const router = useRouter();

    const handleBookingClick = () => { //Joga o usuário para a página de detalhes da barbearia
        router.push(`/barbershops/${barbershop.id}`);
    }

    return ( 
        <Card className=" min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className="p-0 py-0">
                <div className="px-1 w-full h-[159px] relative">

                   <div className=" gap-1 absolute top-2 left-2 z-50">
                    <Badge variant="secondary" className=" opacity-90 flex items-center justify-center z-50">
                            <StarIcon size={12} className="fill-primary text-primary"/>
                            <span>5,0</span>
                        </Badge>
                   </div>

                    <Image
                        src={barbershop.imageUrl} alt={barbershop.name}
                        height={0}
                        width={0}
                        fill
                        style={{
                            objectFit: "cover"
                        }}
                        sizes="100vw"
                        className="h-[159px] rounded-2xl"
                    />
                </div>

                <div className="px-3 pb-3">
                    <h2 className="font-bold overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
                    <div className="text-sn text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</div>
                    <Button className="w-full" variant="secondary" onClick={handleBookingClick}>Reservar</Button>
                </div>
                
            </CardContent>
        </Card>
     );
}
 
export default BrabershopItem;