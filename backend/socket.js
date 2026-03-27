import User from "./models/user.model.js";

export const socketHandler=(io)=>{
    io.on("connection",(socket)=>{
        socket.on("identity",async ({userId})=>{
            try {
                const user=await User.findById(userId,{
                    socketId:socket.id,isOnline:true
                },{new:true})
            } catch (error) {
                console.log("Error in setting socket ID:", error);
                
            }
        })
        socket.on("disconnect",async ()=>{
            try {
                await User.findOneAndUpdate({socketId:socket.id},{
                socketId:null,
                isOnline:false,
            })
                
            } catch (error) {
                console.log("Error in clearing socket ID on disconnect:", error);
                
            }
            
        })
    })
   

}