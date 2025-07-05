"use server";

import { User } from "@/generated/prisma";
import { prisma } from "@/lib/db";
import { authUser } from "./auth";

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

export async function initUser(userData: Partial<User>) {
    const authuser = await authUser();

    if(!authuser.user) return;

    const response = await prisma.user.upsert({
        where: {
            email: authuser.user.email
        },
        update: userData,
        create: {
            id: authuser.user.id,
            image: authuser.user.image,
            name: authuser.user.name,
            email: authuser.user.email,
            emailVerified: authuser.user.emailVerified
        }
    });

    await prisma.user.update({
        where: {
            id: authuser.user.id
        },
        data: {
            role: response.role || "SUBACCOUNT_USER",
        },
        select: {
            name: true
        }
    });

    return response;
}