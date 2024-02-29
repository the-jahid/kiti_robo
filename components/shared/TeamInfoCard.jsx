import { cn } from "@/lib/utils";
import Image from "next/image";
import { Separator } from "../ui/separator";


const TeamInfoCard = ({item}) => {

  const {id, name, imageLink, designation, contribution, contributionLabel} = item;

//   const color =  contributionLabel == 'Strong' ? 'bg-green-500' : 'bg-yellow-500'


  return (
    <div className="  card w-auto bg-base-100 shadow-xl">

    <figure className="px-10 pt-10">
        <Image src={imageLink} width={200} height={300} alt="team_info_image" className="rounded-md"  />
    </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>
       {designation}
    </p>
    <Separator />
    <p>{contribution}</p>
    <p className="text-lg" > <span className="font-semibold" >Level:</span> <span className={cn('text-red-500  font-bold', {
        'text-green-500':contributionLabel == 'Strong',
        'text-yellow-500':contributionLabel == 'Medium',
        'text-red-500':contributionLabel == 'Low'
    })} >{contributionLabel}</span></p>
   
  </div>
</div>
  )
}

export default TeamInfoCard