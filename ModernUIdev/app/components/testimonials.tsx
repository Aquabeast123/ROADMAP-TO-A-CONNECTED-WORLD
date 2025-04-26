import { Star } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Customer Testimonials</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our customers have to say.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-0.5">
                <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                "The rental process was seamless from start to finish. The car was clean, well-maintained, and exactly
                what I needed for my trip. I'll definitely be using DriveEase again!"
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">New York, NY</p>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-0.5">
                <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                "I was impressed by the variety of cars available and the competitive prices. The staff was friendly and
                helpful, making the whole experience enjoyable. Highly recommend!"
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Jane Smith</p>
                  <p className="text-xs text-muted-foreground">Los Angeles, CA</p>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-0.5">
                <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                <Star className="h-5 w-5 fill-none text-amber-500" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                "As a frequent traveler, I've used many car rental services, but DriveEase stands out for their
                exceptional customer service and quality vehicles. The online booking system was intuitive and the
                pickup process was quick."
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                  <AvatarFallback>RJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Robert Johnson</p>
                  <p className="text-xs text-muted-foreground">Chicago, IL</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
