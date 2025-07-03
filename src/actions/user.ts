"use server";

import { User } from "@/generated/prisma";
import { prisma } from "@/lib/db";

export async function createTeamUser(agencyId: string, user: User) {
    if(user.role === "AGENCY_OWNER") return null;

    const response = await prisma.user.create({
        data: {...user}
    })

    return response;
}

export async function findUserRoles(userId: string) {
    const userExists = await prisma.user.findUnique({
        where:{
            id: userId
        },
        select: {
            role: true
        }
    });

    if(!userExists) return null;

    return userExists.role;
}