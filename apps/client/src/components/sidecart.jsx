"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useCart } from "../data/state";
import Link from "next/link";

export default function SideCart() {
  const cartData = useCart((state) => state.cartProducts);
  console.log(cartData);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Cart</Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription className="mb-5">Your Options</SheetDescription>
        </SheetHeader>
        {cartData?.map((product) => (
          <div key={product.id}>
            <Card className="overflow-y-auto">
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{product.price}</p>
              </CardContent>
            </Card>
          </div>
        ))}

        <SheetFooter>
          <div className="flex flex-col items-center w-full m-5">
            <Link className=" flex m-3 border p-3 text-sm w-64 justify-center  text-slate-100 font-bold rounded-md bg-gray-500" href="/cart">View Cart</Link>
            <Button className="flex w-64 ">Checkout</Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
