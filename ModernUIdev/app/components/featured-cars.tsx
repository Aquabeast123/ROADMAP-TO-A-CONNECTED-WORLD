import Image from "next/image"
import { Fuel, Settings, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FeaturedCars() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="border-primary/20 text-primary">
              Premium Selection
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Cars</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our top-rated vehicles with exceptional comfort, performance, and value.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image src="/teslapic.jpg?height=192&width=384" alt="Tesla Model 3" className="object-cover" fill />
              <Badge className="absolute top-2 right-2">Popular</Badge>
            </div>
            <CardHeader>
              <CardTitle>Tesla Model 3</CardTitle>
              <CardDescription>Electric Sedan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>5 Seats</span>
                </div>
                <div className="flex items-center gap-1">
                  <Settings className="h-4 w-4 text-muted-foreground" />
                  <span>Automatic</span>
                </div>
                <div className="flex items-center gap-1">
                  <Fuel className="h-4 w-4 text-muted-foreground" />
                  <span>Electric</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>4.9 (128)</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">From</p>
                <p className="text-lg font-bold">$89/day</p>
              </div>
              <Button>Book Now</Button>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image src="/toyotapic.jpg?height=192&width=384" alt="Car" className="object-cover" fill />
            </div>
            <CardHeader>
              <CardTitle>Toyota RAV4</CardTitle>
              <CardDescription>Compact SUV</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>5 Seats</span>
                </div>
                <div className="flex items-center gap-1">
                  <Settings className="h-4 w-4 text-muted-foreground" />
                  <span>Automatic</span>
                </div>
                <div className="flex items-center gap-1">
                  <Fuel className="h-4 w-4 text-muted-foreground" />
                  <span>Hybrid</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>4.7 (95)</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">From</p>
                <p className="text-lg font-bold">$65/day</p>
              </div>
              <Button>Book Now</Button>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image src="/bmwpic.jpg?height=192&width=384" alt="Car" className="object-cover" fill />
              <Badge className="absolute top-2 right-2" variant="secondary">
                New
              </Badge>
            </div>
            <CardHeader>
              <CardTitle>BMW 3 Series</CardTitle>
              <CardDescription>Luxury Sedan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>5 Seats</span>
                </div>
                <div className="flex items-center gap-1">
                  <Settings className="h-4 w-4 text-muted-foreground" />
                  <span>Automatic</span>
                </div>
                <div className="flex items-center gap-1">
                  <Fuel className="h-4 w-4 text-muted-foreground" />
                  <span>Gasoline</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>4.8 (112)</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">From</p>
                <p className="text-lg font-bold">$95/day</p>
              </div>
              <Button>Book Now</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex justify-center">
          <Button variant="outline" size="lg">
            View All Cars
          </Button>
        </div>
      </div>
    </section>
  )
}
