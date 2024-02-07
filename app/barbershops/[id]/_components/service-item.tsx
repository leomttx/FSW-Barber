"use client";

import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Services } from "@prisma/client";
import { signIn } from "next-auth/react";
import Image from "next/image";

interface ServiceItemProps {
  service: Services;
  isAuthenticaded?: boolean;
}

const ServiceItem = ({ service, isAuthenticaded }: ServiceItemProps) => {
  const handleBookingClick = () => {
    if (!isAuthenticaded) {
      return signIn();
    }

    // TODO: Implementar a lógica de reserva
  };
  return (
    <Card>
      <CardContent className="p-3 w-fulll">
        <div className="flex gap-4 items-center w-full">
          <div className="relative min-h-[110px] min-w-[110px] max-w-[110px] max-h-[110px]">
            <Image
              className="rounded-lg"
              src={service.imageUrl}
              alt={""}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="flex flex-col w-full">
            <h2 className="font-bold">{service.name}</h2>
            <p className="text-sm text-gray-400">{service.description}</p>

            <div className="flex items-center justify-between mt-3">
              <p className="text-primary text-sm font-bold">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(Number(service.price))}
              </p>
              <Button variant="secondary" onClick={handleBookingClick}>
                Reservar
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceItem;
