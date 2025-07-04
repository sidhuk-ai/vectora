"use client";
import { ArrowRight, Check, Play, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { FeatureCard } from "./site/feature-card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { AnimatedGrid } from "./site/animated-grid";
import { Code, Palette, Search, Smartphone, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { price } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function LandingPage() {
  const features = [
    {
      icon: Palette,
      title: "Drag & Drop Builder",
      description:
        "Create stunning websites with our intuitive visual editor. No coding skills required.",
      animation: "animate-drag-drop",
    },
    {
      icon: Code,
      title: "Custom Code Integration",
      description:
        "Add your own HTML, CSS, and JavaScript for unlimited customization possibilities.",
      animation: "animate-code-flow",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description:
        "Every design automatically adapts to look perfect on all devices and screen sizes.",
      animation: "animate-responsive",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized performance with global CDN ensures your site loads instantly worldwide.",
      animation: "animate-speed",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Work together seamlessly with real-time editing and role-based permissions.",
      animation: "animate-collaborate",
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description:
        "Built-in SEO tools and clean code structure help your site rank higher in search results.",
      animation: "animate-seo",
    },
  ];
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Animated Grid Background */}
        <AnimatedGrid />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Badge */}
            <Badge
              variant="secondary"
              className="px-4 py-2 bg-card/50 backdrop-blur-sm border-primary/20 rounded-full stagger-animation"
              style={{ animationDelay: "0.1s" }}
            >
              <Zap className="h-4 w-4 mr-2 text-primary" />
              New: AI-Powered Design Assistant
            </Badge>

            {/* Main Heading with Gradient Text */}
            <div
              className="space-y-4 stagger-animation"
              style={{ animationDelay: "0.2s" }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
                <span className="gradient-text">Vectora</span>
              </h1>
              <p className="text-2xl md:text-4xl font-semibold text-muted-foreground max-w-4xl">
                Build Stunning Websites with
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  Zero Code
                </span>
              </p>
            </div>

            {/* Description */}
            <p
              className="text-xl text-muted-foreground max-w-2xl leading-relaxed stagger-animation"
              style={{ animationDelay: "0.3s" }}
            >
              Create professional websites in minutes with our intuitive
              drag-and-drop builder. No coding required, unlimited
              possibilities.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 w-full max-w-md stagger-animation"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-lg px-8 group"
              >
                Start Building Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:bg-card/80"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className="flex items-center space-x-8 text-sm text-muted-foreground stagger-animation"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                14-day free trial
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>

          {/* Dashboard Image */}
          <div
            className="mt-16 relative max-w-5xl mx-auto stagger-animation"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="relative dashboard-image">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 blur-3xl transform scale-105" />

              {/* Dashboard Image */}
              <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=1000"
                  alt="Vectora Dashboard Interface"
                  width={1000}
                  height={600}
                  className="w-full h-auto"
                  priority
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Create & Scale
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help you build, customize, and grow
              your online presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="stagger-animation"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  animation={feature.animation}
                  delay={index * 100}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Simple,{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. Upgrade or downgrade at
              any time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {price.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular
                    ? "border-purple-200 shadow-xl scale-105"
                    : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Free" && (
                      <span className="text-gray-600">/month</span>
                    )}
                  </div>
                  <CardDescription className="mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/agency?plan=${plan.priceId}`}>
                    <Button
                      className={cn(
                        "w-full mt-8",
                        plan.popular &&
                          "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      )}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-blue-600 to-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of creators and start building your dream website
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 text-lg px-8 group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 bg-transparent"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
