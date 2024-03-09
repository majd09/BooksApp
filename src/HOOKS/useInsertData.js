import baseUrl from "../API/baseUrl";



const useInsertDatawithImage=async(url,param)=>{

    const config={

        headers:{ "Content-Type":"multipart/form-data" }
    }
    const res= await baseUrl.post(url,param,config);
    return res.data;
}

export default useInsertDatawithImage;