"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { agencyFormSchema, type AgencyFormData } from "@/lib/constants"
import { Building2, Mail, Phone, MapPin, Globe, Save, Loader2 } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { ImageUpload } from "@/components/temporary/image-upload"
import { Agency } from "@/generated/prisma"
import { initUser } from "@/actions/user"
import { toast } from "sonner"

interface AgencyFormProps {
  initialData?: Partial<Agency>
  className?: string
}

const countries = [
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
  { value: "GB", label: "United Kingdom" },
  { value: "AU", label: "Australia" },
  { value: "DE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "ES", label: "Spain" },
  { value: "IT", label: "Italy" },
  { value: "NL", label: "Netherlands" },
  { value: "SE", label: "Sweden" },
  { value: "NO", label: "Norway" },
  { value: "DK", label: "Denmark" },
  { value: "FI", label: "Finland" },
  { value: "JP", label: "Japan" },
  { value: "KR", label: "South Korea" },
  { value: "SG", label: "Singapore" },
  { value: "IN", label: "India" },
  { value: "BR", label: "Brazil" },
  { value: "MX", label: "Mexico" },
  { value: "AR", label: "Argentina" },
]

export function AgencyForm({ initialData, className }: AgencyFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFormSubmit = async (data: AgencyFormData) => {
    if(!initialData?.id) {
      const bodyData = {
        email: data.companyEmail,
        name: data.name,
        shipping: {
          address: {
            city: data.city,
            country: data.country,
            line1: data.address,
            postal_code: data.zipCode,
            state: data.state,
          },
          name: data.name,
        },
        address: {
          city: data.city,
          country: data.country,
          line1: data.address,
          postal_code: data.zipCode,
          state: data.state,
        },
      }
    }

    await initUser({ role: "AGENCY_OWNER" })

    // Redirect after success (in real app)
    setTimeout(() => {
      console.log("Redirecting to dashboard...")
    }, 2000)
  }

  const form = useForm<AgencyFormData>({
    resolver: zodResolver(agencyFormSchema),
    defaultValues: {
      name: initialData?.name || "",
      companyEmail: initialData?.companyEmail || "",
      companyPhone: initialData?.companyPhone || "",
      whiteLabel: initialData?.whiteLabel || false,
      address: initialData?.address || "",
      city: initialData?.city || "",
      state: initialData?.state || "",
      zipCode: initialData?.zipCode || "",
      country: initialData?.country || "",
      agencyLogo: initialData?.agencyLogo || "",
    },
  })

  const formSubmit = async (data: AgencyFormData) => {
    setIsSubmitting(true)
    try {
      await handleFormSubmit(data)
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("Error!",{
        description: "Could not create your agency. Please try again."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className={cn("w-full max-w-4xl mx-auto border-0 shadow-lg bg-card/50 backdrop-blur-sm", className)}>
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
          <Building2 className="h-6 w-6 text-primary" />
          Agency Information
        </CardTitle>
        <CardDescription className="text-base">
          Complete your agency profile to get started with Vectora
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(formSubmit)} className="space-y-8">
            {/* Basic Information Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b">
                <Building2 className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Basic Information</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Agency Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Agency Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your agency name"
                          {...field}
                          className="bg-background/50 border-border/50 focus:bg-background transition-colors"
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Company Email */}
                <FormField
                  control={form.control}
                  name="companyEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Email *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="email"
                            placeholder="company@example.com"
                            {...field}
                            className="pl-10 bg-background/50 border-border/50 focus:bg-background transition-colors"
                            disabled={isSubmitting}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Company Phone */}
                <FormField
                  control={form.control}
                  name="companyPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Phone *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            {...field}
                            className="pl-10 bg-background/50 border-border/50 focus:bg-background transition-colors"
                            disabled={isSubmitting}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Whitelabel Preference */}
                <FormField
                  control={form.control}
                  name="whiteLabel"
                  render={({ field }) => (
                    <FormItem className="flex flex-col justify-end">
                      <div className="flex items-center justify-between p-4 border rounded-lg bg-background/50 border-border/50">
                        <div className="space-y-1">
                          <FormLabel className="text-sm font-medium">Whitelabel Solution</FormLabel>
                          <FormDescription className="text-xs">
                            Remove Vectora branding from your websites
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} disabled={isSubmitting} />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Agency Logo */}
              <FormField
                control={form.control}
                name="agencyLogo"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <ImageUpload
                        value={field.value}
                        onChange={field.onChange}
                        error={form.formState.errors.agencyLogo?.message}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Address Information Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Address Information</h3>
              </div>

              {/* Address */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street Address *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="123 Main Street, Suite 100"
                        {...field}
                        className="bg-background/50 border-border/50 focus:bg-background transition-colors"
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* City */}
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="New York"
                          {...field}
                          className="bg-background/50 border-border/50 focus:bg-background transition-colors"
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* State */}
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State/Province *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="NY"
                          {...field}
                          className="bg-background/50 border-border/50 focus:bg-background transition-colors"
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* ZIP Code */}
                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ZIP/Postal Code *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="10001"
                          {...field}
                          className="bg-background/50 border-border/50 focus:bg-background transition-colors"
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Country */}
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                        <FormControl>
                          <SelectTrigger className="bg-background/50 border-border/50 focus:bg-background transition-colors">
                            <div className="flex items-center">
                              <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                              <SelectValue placeholder="Select country" />
                            </div>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country.value} value={country.value}>
                              {country.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-6 border-t">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 min-w-[140px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Agency
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
