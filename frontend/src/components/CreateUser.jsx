import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function UserCard({onclose}) {

  return (
    <div className="w-full flex justify-center items-center fixed inset-0  bg-black bg-opacity-30 backdrop-blur-sm ">
        <Card className="w-[600px]" >
      <CardHeader>
        <CardTitle>Ctreate User</CardTitle>
        <CardDescription>Add a new user in just one click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid grid-cols-2 w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter User's Name" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter User's userame" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email ID</Label>
              <Input type={"email"} id="eamil" placeholder="Enter User's email address" />
            </div>
            
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input type={"number"} className="no-spin" id="phone" placeholder="Enter User's Phone Number" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Website</Label>
              <Input id="website" placeholder="Enter User's Website URL" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="company">Company Name/Moto</Label>
              <Input id="company" placeholder="Enter User's Company Name/Moto" />
            </div>

            <div className="flex flex-col space-y-1.5 col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="street / suite / city / zipcode" />
            </div>

          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={(onclose)} variant="destructive">Cancel</Button>
        {/* <button >Cancel</button> */}
        <Button onClick={(()=>{alert("User Created"), onclose()})}>Create</Button>
      </CardFooter>
    </Card>
    </div>
  )
}
