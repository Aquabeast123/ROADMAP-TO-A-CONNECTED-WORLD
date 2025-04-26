import { CalendarDays, Car, CheckCircle, CreditCard } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Renting a car with us is quick and easy. Follow these simple steps to get on the road.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <CalendarDays className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">1. Choose Your Dates</h3>
            <p className="text-muted-foreground">Select your pick-up and return dates to see available vehicles.</p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Car className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">2. Select Your Car</h3>
            <p className="text-muted-foreground">Browse our fleet and choose the perfect vehicle for your needs.</p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <CreditCard className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">3. Book & Pay</h3>
            <p className="text-muted-foreground">Complete your reservation with our secure payment system.</p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">4. Enjoy Your Ride</h3>
            <p className="text-muted-foreground">Pick up your car and hit the road with confidence.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
