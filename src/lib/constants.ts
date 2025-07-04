import { z } from "zod"

export const price = [
    {
        name: "Starter",
        price: "Free",
        description: "Perfect for personal projects",
        features: ["1 Website", "Basic Templates", "Mobile Responsive", "SSL Certificate", "Community Support"],
        cta: "Get Started",
        popular: false,
        priceId: ""
    },
    {
        name: "Professional",
        price: "$19",
        description: "Best for growing businesses",
        features: [
            "5 Websites",
            "Premium Templates",
            "Custom Domain",
            "Advanced SEO Tools",
            "Priority Support",
            "Team Collaboration",
        ],
        cta: "Start Free Trial",
        popular: true,
        priceId: "pro"
    },
    {
        name: "Enterprise",
        price: "$49",
        description: "For large organizations",
        features: [
            "Unlimited Websites",
            "White Label Solution",
            "Advanced Analytics",
            "Custom Integrations",
            "Dedicated Support",
            "SLA Guarantee",
        ],
        cta: "Contact Sales",
        popular: false,
        priceId: "enterprise"
    },
]

export const agencyFormSchema = z.object({
  name: z
    .string()
    .min(2, "Agency name must be at least 2 characters")
    .max(100, "Agency name must be less than 100 characters")
    .regex(/^[a-zA-Z0-9\s&.-]+$/, "Agency name contains invalid characters"),

  agencyLogo: z.string().min(2),

  companyEmail: z.string().email("Please enter a valid email address").min(1, "Company email is required"),

  companyPhone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number must be less than 20 characters")
    .regex(/^[+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"),

  whiteLabel: z.boolean(),

  address: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .max(200, "Address must be less than 200 characters"),

  city: z
    .string()
    .min(2, "City must be at least 2 characters")
    .max(50, "City must be less than 50 characters")
    .regex(/^[a-zA-Z\s.-]+$/, "City contains invalid characters"),

  state: z.string().min(2, "State must be at least 2 characters").max(50, "State must be less than 50 characters"),

  zipCode: z
    .string()
    .min(3, "ZIP code must be at least 3 characters")
    .max(10, "ZIP code must be less than 10 characters")
    .regex(/^[a-zA-Z0-9\s-]+$/, "ZIP code contains invalid characters"),

  country: z.string().min(1, "Please select a country"),
})

export type AgencyFormData = z.infer<typeof agencyFormSchema>
