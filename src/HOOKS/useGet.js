import baseUrl from "../API/baseUrl";

const useGetData=async(url,param)=>{

    const res= await baseUrl.get(url,param);
    return res.data;
}

export default useGetData;