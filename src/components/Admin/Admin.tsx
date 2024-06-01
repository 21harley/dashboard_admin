"use client"
import { useState, useEffect } from "react";
import { cards } from "@/src/data/test/data";
import { CardAdmin } from "./CardAdmin";
import { Transactions } from "./Transactions";
import { Rightbar } from "./Rightbar";
import useUserStore from "@/src/store/store";

const Dashboard = () => {
  
  const { setUsers } = useUserStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/usuarios");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-5 mb-5">
      <div className="flex-1 flex flex-col gap-5">
      <div className="flex flex-col lg:flex-row gap-5 mt-5 items-center justify-center">
            <div className="">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-5 gap-5 bg-blue-400 rounded-md">
                {cards.map((item) => (
                    <CardAdmin item={item} key={item.id} />
                ))}
                </div>
            </div>
            <div className="">
                <Rightbar />
            </div>
        </div>
        {!isLoading && <Transactions />}
      </div>
      
    </div>
  );
};

export default Dashboard;