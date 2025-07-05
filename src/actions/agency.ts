"use server";

import { Agency } from "@/generated/prisma";
import { prisma } from "@/lib/db";

export const updateAgencyDetails = async (agencyId: string, agencyData: Partial<Agency>) => {
    const response = await prisma.agency.update({
        where: { id: agencyId },
        data: { ...agencyData }
    });

    return response;
}