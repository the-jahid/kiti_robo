"use client";

import FoodItem from "@/components/shared/FoodItem";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useData } from "@/hooks/useData";
import Image from "next/image";
import { FaBurger, FaPizzaSlice, FaIceCream } from "react-icons/fa6";
import { MdRamenDining } from "react-icons/md";
import { RiCake3Line } from "react-icons/ri";

// Start Food Item page function
const FoodItemPage = () => {
  const { data:foodsData } = useData("http://203.190.8.197/food/foods");

  return (
    <main className="bg-primary_background px-5 md:px-10 lg:px-16 py-16">
      <section className="">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl text-center text-primary 
        font-bold"
        >
          Choose Your Desired Dishes From our Shop Partners
        </h2>
        <div
          className="flex flex-col md:flex-row justify-end items-stretch 
        md:items-center gap-2 py-10"
        >
          <Input
            type="text"
            placeholder="What would you like to eat?"
            className="w-full md:w-auto md:basis-1/4"
          />
          <Button className="bg-primary w-full md:w-auto">Search</Button>
        </div>
      </section>
      <section style={{ background: "#EAFFEA" }} className="rounded-lg pb-10">
        <div className="flex flex-col md:flex-row items-center ml-10 gap-10">
          <Image
            src={"https://i.ibb.co/8NZMsSq/green-Garden-logo.png"}
            alt="food_item_card"
            width={200}
            height={200}
            className="rounded-full "
          />
          <h3
            className="text-start font-bold text-2xl md:text-3xl lg:text-4xl 
          text-green-800"
          >
            Menu That Always <br /> Makes You Fall In Love
          </h3>
        </div>
        <Tabs defaultValue="burger" className="w-full flex flex-col md:flex-row items-center">
          <TabsList
            className="flex flex-col gap-2 w-full bg-transparent 
           basis-1/6"
          >
            <TabsTrigger
              value="burger"
              className="data-[state=active]:bg-green-800 
              rounded-full p-3 pr-10 flex items-center justify-start gap-3"
            >
              <FaBurger className="bg-white rounded-full text-yellow-700 text-2xl p-1" />
              Burger
            </TabsTrigger>
            <TabsTrigger
              value="pizza"
              className="data-[state=active]:bg-green-800 
              rounded-full p-3 pr-10 flex items-center justify-start gap-3"
            >
              <FaPizzaSlice className="bg-white rounded-full text-yellow-700 text-2xl p-1" />
              Pizza
            </TabsTrigger>
            <TabsTrigger
              value="cupcake"
              className="data-[state=active]:bg-green-800 
              rounded-full p-3 pr-10 flex items-center justify-start gap-3"
            >
              <RiCake3Line className="bg-white rounded-full text-yellow-700 text-2xl p-1" />
              Cupcake
            </TabsTrigger>
            <TabsTrigger
              value="ramen"
              className="data-[state=active]:bg-green-800 
              rounded-full p-3 pr-10 flex items-center justify-start gap-3"
            >
              <MdRamenDining className="bg-white rounded-full text-yellow-700 text-2xl p-1" />
              Ramen
            </TabsTrigger>
            <TabsTrigger
              value="icecream"
              className="data-[state=active]:bg-green-800 
              rounded-full p-3 pr-10 flex items-center justify-start gap-3"
            >
              <FaIceCream className="bg-white rounded-full text-yellow-700 text-2xl p-1" />
              Ice Cream
            </TabsTrigger>
          </TabsList>
          <section className="md:basis-3/4">
            <TabsContent value="burger">
              <Carousel className="w-full max-w-sm sm:max-w-none mx-auto">
                <CarouselContent className="-ml-1">
                  {foodsData.map((food, index) => (
                    <CarouselItem
                      key={food.id || index}
                      className="pl-1 md:basis-1/2 
                      lg:basis-1/3"
                    >
                      <FoodItem item={food} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>
            <TabsContent value="pizza">
              <Carousel className="w-full mx-auto">
                <CarouselContent className="-ml-1">
                  {foodsData.map((food, index) => (
                    <CarouselItem
                      key={food.id || index}
                      className="pl-1 md:basis-1/2 
               lg:basis-1/3"
                    >
                      <FoodItem item={food} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>
          </section>
        </Tabs>
      </section>
    </main>
  );
};

export default FoodItemPage;
