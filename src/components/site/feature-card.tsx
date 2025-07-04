"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  animation: string
  delay?: number
}

export function FeatureCard({ icon: Icon, title, description, animation, delay = 0 }: FeatureCardProps) {
  return (
    <Card
      className="group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardHeader className="relative z-10">
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${animation}`}
        >
          <Icon className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10">
        <CardDescription className="text-base leading-relaxed text-muted-foreground">{description}</CardDescription>

        {/* Interactive Animation Element */}
        <div className="mt-6 h-32 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden">
          <div className={`feature-animation ${animation}`}>
            <Icon className="h-12 w-12 text-primary/60" />
          </div>
        </div>
      </CardContent>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
    </Card>
  )
}
