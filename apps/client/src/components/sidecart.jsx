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

        <SheetFooter className="flex flex-row justify-center">
          <Link href="/cart">View Cart</Link>
          <SheetClose asChild>
            <Button>Checkout</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
