"use server";

import { prisma } from "@/lib/db";
import { authUser } from "./auth";
import { InvitationStatus } from "@/generated/prisma";
import { createTeamUser } from "./user";
import { saveActivityLogsNotification } from "./notifications";

export async function verifyAndAcceptInvitation() {
    const authuser = await authUser();

    const invitationExist = await prisma.invitation.findUnique({
        where: {
            email: authuser.user.email,
            status: InvitationStatus.PENDING
        }
    })

    if(invitationExist) {
        const newUser = await createTeamUser(invitationExist.agencyId,{
            name: authuser.user.name,
            avatarUrl: authuser.user.image as string,
            role: invitationExist.role,
            email: authuser.user.email,
            id: authuser.user.id,
            agencyId: invitationExist.agencyId,
            createdAt: new Date(),
            updatedAt: new Date(),
            emailVerified: true
        })

        await saveActivityLogsNotification({
            agencyId: invitationExist.agencyId,
            description: "User joined",
            subAccountId: undefined
        });

        if(newUser) {
            await prisma.user.update({
                where: {
                    id: authuser.user.id
                },
                data: {
                    role: newUser.role
                }
            })

            await prisma.invitation.delete({
                where: { email: newUser.email }
            })

            return newUser.agencyId
        } else {
            return null;
        }
    }
    const agency = await prisma.user.findUnique({
        where: { email: authuser.user.email },
        select: {
            agencyId: true
        }
    });
    return agency ? agency.agencyId : null;
}