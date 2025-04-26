import Link from "next/link"
import { CalendarDays, Car, ChevronRight, MapPin, Search, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DatePickerWithRange } from "./components/date-range-picker"
import { FeaturedCars } from "./components/featured-cars"
import { HowItWorks } from "./components/how-it-works"
import { Testimonials } from "./components/testimonials"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Car className="h-6 w-6" />
              <span className="font-bold">DriveEase</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Cars
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Locations
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                About
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Sign In
            </Link>
            <Button>Sign Up</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Find Your Perfect Ride Today
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover our wide selection of vehicles for any occasion. Easy booking, flexible options, and
                    competitive rates.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Browse Cars
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full">
                  <CardContent className="p-6">
                    <Tabs defaultValue="rent" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="rent">Rent a Car</TabsTrigger>
                        <TabsTrigger value="airport">Airport Transfer</TabsTrigger>
                      </TabsList>
                      <TabsContent value="rent" className="space-y-4 pt-4">
                        <div className="grid gap-4">
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <label
                                htmlFor="location"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Pick-up Location
                              </label>
                              <div className="relative">
                                <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input id="location" placeholder="City, Airport, or Address" className="pl-8" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label
                                htmlFor="car-type"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Car Type
                              </label>
                              <Select>
                                <SelectTrigger id="car-type">
                                  <SelectValue placeholder="Select car type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="economy">Economy</SelectItem>
                                  <SelectItem value="compact">Compact</SelectItem>
                                  <SelectItem value="midsize">Midsize</SelectItem>
                                  <SelectItem value="suv">SUV</SelectItem>
                                  <SelectItem value="luxury">Luxury</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Pick-up & Return Date
                            </label>
                            <DatePickerWithRange className="w-full" />
                          </div>
                          <Button type="submit" className="w-full gap-1">
                            <Search className="h-4 w-4" />
                            Search Available Cars
                          </Button>
                        </div>
                      </TabsContent>
                      <TabsContent value="airport" className="space-y-4 pt-4">
                        <div className="grid gap-4">
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <label
                                htmlFor="airport"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Airport
                              </label>
                              <div className="relative">
                                <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input id="airport" placeholder="Airport name or code" className="pl-8" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label
                                htmlFor="destination"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Destination
                              </label>
                              <div className="relative">
                                <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input id="destination" placeholder="Hotel or Address" className="pl-8" />
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <label
                                htmlFor="date"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Date
                              </label>
                              <div className="relative">
                                <CalendarDays className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input id="date" type="date" className="pl-8" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label
                                htmlFor="passengers"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Passengers
                              </label>
                              <div className="relative">
                                <Users className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Select>
                                  <SelectTrigger id="passengers">
                                    <SelectValue placeholder="Select passengers" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="1">1 passenger</SelectItem>
                                    <SelectItem value="2">2 passengers</SelectItem>
                                    <SelectItem value="3">3 passengers</SelectItem>
                                    <SelectItem value="4">4 passengers</SelectItem>
                                    <SelectItem value="5+">5+ passengers</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          </div>
                          <Button type="submit" className="w-full gap-1">
                            <Search className="h-4 w-4" />
                            Find Transfer
                          </Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <FeaturedCars />

        <HowItWorks />

        <Testimonials />

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Hit the Road?</h2>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Book your car today and enjoy the freedom of the open road with our premium rental service.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-1">
                  Book Now
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 DriveEase. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
