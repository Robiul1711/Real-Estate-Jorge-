import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"

//home banner section
export const HomeBannerQuery =()=>{
    const axiosPublic=useAxiosPublic()
    const {data:homeBanner,isLoading,error}=useQuery({
        queryKey:['home-banner'],
        queryFn: async()=>{
            const res= await axiosPublic(`/cms/home_page/banner_section`)
            return res?.data
        }
    })

    return{homeBanner,isLoading,error} 
}

//process section
export const PricessSectionQuery =()=>{
    const axiosPublic=useAxiosPublic()
    const {data:processSection,isLoading,error}=useQuery({
        queryKey:['process-section'],
        queryFn: async()=>{
            const res= await axiosPublic(`/cms/home_page/process_section`)
            return res?.data
        }
    })

    return{processSection,isLoading,error} 
}
//why choose us section
export const WhyChooseUsQuery =()=>{
    const axiosPublic=useAxiosPublic()
    const {data:whyChooseData,isLoading,error}=useQuery({
        queryKey:['why-choose-us'],
        queryFn: async()=>{
            const res= await axiosPublic(`/confidence`)
            return res?.data
        }
    })

    return{whyChooseData,isLoading,error} 
}
//join platform section
export const JoinPlatform =()=>{
    const axiosPublic=useAxiosPublic()
    const {data:JoinPlatformData,isLoading,error}=useQuery({
        queryKey:['join-platform'],
        queryFn: async()=>{
            const res= await axiosPublic(`/cms/home_page/investment_section`)
            return res?.data
        }
    })

    return{JoinPlatformData,isLoading,error} 
}

//who we are section
export const WhoWeAreQuery =()=>{
    const axiosPublic=useAxiosPublic()
    const {data:whoWeAreData,isLoading,error}=useQuery({
        queryKey:['who-we-are'],
        queryFn: async()=>{
            const res= await axiosPublic(`/cms/about_page/banner_section`)
            return res?.data
        }
    })

    return{whoWeAreData,isLoading,error} 
}


//our value section

export const OurValueQuery =()=>{
    const axiosPublic=useAxiosPublic()
    const {data:ourValueData,isLoading,error}=useQuery({
        queryKey:['our-value'],
        queryFn: async()=>{
            const res= await axiosPublic(`/cms/about_page/value_section`)
            return res?.data
        }
    })

    return{ourValueData,isLoading,error} 
}














//footer section
export const FooterQuery =()=>{
    const axiosPublic=useAxiosPublic()
    const {data:footerData,isLoading,error}=useQuery({
        queryKey:['footer-section'],
        queryFn: async()=>{
            const res= await axiosPublic(`/cms/home_page/footer_section`)
            return res?.data
        }
    })

    return{footerData,isLoading,error} 
}
