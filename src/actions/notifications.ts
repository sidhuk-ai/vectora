"use server";

import { prisma } from "@/lib/db";
import { authUser } from "./auth";

export async function saveActivityLogsNotification({
    agencyId,
    subAccountId,
    description
}:{
    agencyId?: string,
    subAccountId?: string,
    description: string
}) {
    const user = await authUser();
    let userData;

    if(!user.user){
        const response = await prisma.user.findFirst({
            where:{
                agency: {
                    subAccount: {
                        some: {
                            id: subAccountId
                        }
                    }
                }
            }
        });

        if(response) {
            userData = response;
        }
    } else {
        const response = await prisma.user.findUnique({
            where: {
                email: user.user.email
            }
        });

        if(response) {
            userData = response
        }
    }

    if(!userData) {
        throw new Error("Could not find a user.")
    }

    let foundAgencyId = agencyId;

    if(!foundAgencyId){
        if(!subAccountId) {
            throw new Error("You need to provide atleast agency id or sub-account id.");
        }

        const subAccount = await prisma.subAccount.findUnique({
            where: {
                id: subAccountId
            }
        })
        
        if(subAccount) {
            foundAgencyId = subAccount.agencyId
        }
    }

    if(subAccountId) {
        await prisma.notification.create({
            data: {
                notification: `${userData.name} | ${description}`,
                user: {
                    connect: {
                        id: userData.id
                    }
                },
                agency: {
                    connect: {
                        id: foundAgencyId
                    }
                },
                subAccount: {
                    connect: {
                        id: subAccountId
                    }
                }
            }
        });
    } else {
        await prisma.notification.create({
            data: {
                notification: `${userData.name} | ${description}`,
                user: {
                    connect: {
                        id: userData.id
                    }
                },
                agency: {
                    connect: {
                        id: foundAgencyId
                    }
                }
            }
        });
    }
}