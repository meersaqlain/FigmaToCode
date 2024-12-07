import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Menu } from 'lucide-react';


const MobileNavbar = () => {
    return (
        <div>
            <Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <menu/>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription className="bg-slate-600 ">
      <ul className=" flex justify-center gap-2  text-white items-center ">
                <li><a href="">Home</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Gallery</a></li>
          </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
     </Sheet>
        </div>
    )
}
export default MobileNavbar ;