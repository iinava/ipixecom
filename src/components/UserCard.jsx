import axios from "axios";


export default function UserCard({user}) {

  return (
    <div className="relative h-[300px] w-[300px] rounded-lg ">
      <img
        src={user.avatar}
        alt="AirMax Pro"
        className="z-0 h-[250px] w-[250px] rounded-[50%] object-cover"
      />
      <div className="absolute inset-0 "></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{user.name}</h1>
        <p className="mt-2 text-sm text-gray-300">
          {user.email}
        </p>
       
      </div>
    </div>
  );
}
