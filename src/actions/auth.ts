"use server";

import { Role } from "@/generated/prisma";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function getAuthUserDetails() {
    const authuser = await authUser();

    if(!authuser?.user) return;

    const userData = await prisma.user.findUnique({
        where: {
            email: authuser.user.email
        },
        include: {
            agency:{
                include: {
                    sidebarOption: true,
                    subAccount: {
                        include: {
                            sidebarOption: true
                        }
                    }
                }
            },
            permissions: true
        }
    });
    return userData;
}

export async function authUser() {
    const authUser = await auth.api.getSession({
        headers: await headers()
    })

    if(!authUser?.user) return redirect('/agency/login');
    return authUser;
}