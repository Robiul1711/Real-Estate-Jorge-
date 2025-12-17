import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

//home banner section
export const HomeBannerQuery = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: homeBanner,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["home-banner"],
    queryFn: async () => {
      const res = await axiosPublic(`/cms/home_page/banner_section`);
      return res?.data;
    },
  });

  return { homeBanner, isLoading, error };
};

//process section
export const PricessSectionQuery = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: processSection,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["process-section"],
    queryFn: async () => {
      const res = await axiosPublic(`/cms/home_page/process_section`);
      return res?.data;
    },
  });

  return { processSection, isLoading, error };
};
//why choose us section
export const WhyChooseUsQuery = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: whyChooseData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["why-choose-us"],
    queryFn: async () => {
      const res = await axiosPublic(`/confidence`);
      return res?.data;
    },
  });

  return { whyChooseData, isLoading, error };
};
//join platform section
export const JoinPlatform = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: JoinPlatformData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["join-platform"],
    queryFn: async () => {
      const res = await axiosPublic(`/cms/home_page/investment_section`);
      return res?.data;
    },
  });

  return { JoinPlatformData, isLoading, error };
};

//who we are section
export const WhoWeAreQuery = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: whoWeAreData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["who-we-are"],
    queryFn: async () => {
      const res = await axiosPublic(`/cms/about_page/banner_section`);
      return res?.data;
    },
  });

  return { whoWeAreData, isLoading, error };
};

//our value section

export const OurValueQuery = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: ourValueData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["our-value"],
    queryFn: async () => {
      const res = await axiosPublic(`/cms/about_page/value_section`);
      return res?.data;
    },
  });

  return { ourValueData, isLoading, error };
};

// project page 

// Meet our team Members data 
export const MeetOurTeamQuery = () => {
      const axiosPublic = useAxiosPublic();

  // ✅ Fetch team members
  const {
    data: teamMembersData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["teamMembers"],
    queryFn: async () => {
      const res = await axiosPublic(`/team-members`);
      return res?.data;
    },
  });

  return { teamMembersData, isLoading, error };
}

export const ProjectQuery = () => {
      const axiosPublic = useAxiosPublic();

  // ✅ Fetch Projects
  const {
    data: projectsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axiosPublic(`/project`);
      return res?.data;
    },
  });

  return { projectsData, isLoading, error };
}
// Blog page

export const BlogQuery = () => {
     const axiosPublic = useAxiosPublic();
    const {
      data: blogData,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["blog"],
      queryFn: async () => {
        const res = await axiosPublic(`/blog`);
        return res?.data;
      },
    });
  
    return { blogData, isLoading, error };
}


export const AmbassadorsQuery = () => {
     const axiosPublic = useAxiosPublic();
    const {
      data: ambassadorsData,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["ambassadors"],
      queryFn: async () => {
        const res = await axiosPublic(`/ambassadors`);
        return res?.data;
      },
    });
  
    return { ambassadorsData, isLoading, error };
}


export const InsvestmentCategoryQuery = () => {
     const axiosPublic = useAxiosPublic();
    const {
      data: investmentCategoryData,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["investmentCategory"],
      queryFn: async () => {
        const res = await axiosPublic(`/investment-categories`);
        return res?.data;
      },
    });
  
    return { investmentCategoryData, isLoading, error };
}

//footer section
export const FooterQuery = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: footerData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["footer-section"],
    queryFn: async () => {
      const res = await axiosPublic(`/cms/home_page/footer_section`);
      return res?.data;
    },
  });

  return { footerData, isLoading, error };
};
