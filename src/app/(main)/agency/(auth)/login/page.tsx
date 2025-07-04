"use client"

import { SignInForm } from "@/components/forms/sign-in-form"
import { AnimatedGrid } from "@/components/site/animated-grid"
import { Shield, Zap, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SignInPage() {
  
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <AnimatedGrid />
      </div>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Marketing Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-4 py-2 bg-card/50 backdrop-blur-sm border-primary/20">
                <Zap className="h-4 w-4 mr-2 text-primary" />
                Trusted by 50,000+ creators
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Welcome back to{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent animate-gradient">
                  Vectora
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Continue building amazing websites with our powerful, intuitive platform. Your creative journey awaits.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="flex flex-col items-center lg:items-start space-y-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Secure & Private</h3>
                <p className="text-sm text-muted-foreground text-center lg:text-left">
                  Your data is protected with enterprise-grade security
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start space-y-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground text-center lg:text-left">
                  Build and deploy websites in minutes, not hours
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start space-y-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold">Team Ready</h3>
                <p className="text-sm text-muted-foreground text-center lg:text-left">
                  Collaborate seamlessly with your team members
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Sign In Form */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/10 blur-3xl transform scale-110 opacity-50" />

            <div className="relative">
              <SignInForm />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
    </div>
  )
}
