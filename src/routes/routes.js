import AddNewUser from "../AdminSide/AddNewUser/AddNewUser"
import Dashboard from "../AdminSide/Dashboard/Dashboard"
import RegisteredUser from "../AdminSide/RegisteredUser/RegisteredUser"
import RemoveUser from "../AdminSide/RemoveUser/RemoveUser"
import UpdateUser from "../AdminSide/UpdateUser/UpdateUser"
// import ViewOrders from "../AdminSide/ViewOrders/ViewOrders"
// import CusDeliveryReq from "../AdminSide/CusDeliveryReq/CusDeliveryReq"
// import CollectedParcelCus from "../AdminSide/CollectedParcelCus/CollectedParcelCus"
// import CollectedParcelCenter from "../AdminSide/CollectedParcelCenter/CollectedParcelCenter"
import ParcelSendCenter from "../AdminSide/ParcelSendCenter/ParcelSendCenter"
// import CustomerDetails from "../AdminSide/CustomerDetails/CustomerDetails"
import ParcelSendReciver from "../AdminSide/ParcelSendReciver/ParcelSendReciver"
// import CompletedDeliverey from "../AdminSide/CompletedDelivery/CompletedDelivery"
import RegisterVehicle from "../AdminSide/RegisterVehicle/RegisterVehicle"
// import Landing from "../Homepage/Homepage"



const routes = [
    // {path:'/', exact:true, name:'Landing', component:Landing},
    {path:'/adminmasterpage', exact:true, name:'Admin'},
    {path:'/adminmasterpage/dashboard', exact:true, name:'Dashboard', component:Dashboard},
    {path:'/adminmasterpage/addnewuser', exact:true,name:'AddNewUser', component:AddNewUser},
    {path:'/adminmasterpage/updateuser',exact:true,name:'UpdateUser',component:UpdateUser},
    {path:'/adminmasterpage/removeeuser',exact:true,name:'RemoveUser',component:RemoveUser},
    {path:'/adminmasterpage/registeredusers',exact:true,name:'RegisteredUser',component:RegisteredUser},
    // {path:'/adminmasterpage/viewallorders',exact:true,name:'ViewOrders',component:ViewOrders},
    // {path:'/adminmasterpage/cusdeliveryreq',exact:true,name:'CusDeliveryReq',component:CusDeliveryReq},
    // {path:'/adminmasterpage/collectedparcelcus',exact:true,name:'CollectedParcelCus',component:CollectedParcelCus},
    // {path:'/adminmasterpage/collectedparcelcenter',exact:true,name:'CollectedParcelCenter',component:CollectedParcelCenter},
    {path:'/adminmasterpage/parcelsentanothercenter',exact:true,name:'ParcelSendCenter',component:ParcelSendCenter},
    // {path:'/adminmasterpage/customerdetails',exact:true,name:'CustomerDetails',component:CustomerDetails},
    {path:'/adminmasterpage/parcelsendreciver',exact:true,name:'ParcelSendReciver',component:ParcelSendReciver},
    // {path:'/adminmasterpage/completeddilivery',exact:true,name:'CompletedDelivery',component:CompletedDeliverey},
    {path:'/adminmasterpage/registervehicle',exact:true,name:'RegisterVehicle',component:RegisterVehicle}
    
]

export default routes