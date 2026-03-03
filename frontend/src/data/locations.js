/**
 * Location data for SEO landing pages.
 * Each city gets its own page targeting "best [service] in [city]" keywords.
 */

const LOCATIONS = [
    // Odisha — PRIMARY FOCUS
    { slug: "bhubaneswar", city: "Bhubaneswar", state: "Odisha", isPrimary: true, desc: "Bhubaneswar, the capital of Odisha, is a fast-growing IT hub. Thousands of small businesses, startups, and local shops here are going digital every day." },
    { slug: "cuttack", city: "Cuttack", state: "Odisha", isPrimary: true, desc: "Cuttack, the Silver City of Odisha, has a rich business community. From jewellery shops to coaching centres, businesses here need a strong online presence." },
    { slug: "balasore", city: "Balasore", state: "Odisha", isPrimary: true, desc: "Balasore is a growing city in northern Odisha with increasing demand for digital solutions among local businesses and traders." },
    { slug: "dhenkanal", city: "Dhenkanal", state: "Odisha", isPrimary: true, desc: "Dhenkanal's local businesses — from grocery stores to tuition centres — are embracing the digital revolution. We help them get online affordably." },
    { slug: "bhawanipatna", city: "Bhawanipatna", state: "Odisha", isPrimary: true, desc: "Bhawanipatna, the heart of Kalahandi district, is home to many small businesses that deserve a professional online presence." },
    { slug: "kalahandi", city: "Kalahandi", state: "Odisha", isPrimary: true, desc: "Kalahandi district is growing fast and local businesses need websites, apps, and digital marketing to reach more customers." },
    { slug: "rourkela", city: "Rourkela", state: "Odisha", isPrimary: true, desc: "Rourkela, Odisha's industrial city, has a thriving business scene. We help businesses here stand out online with modern websites and marketing." },
    { slug: "sambalpur", city: "Sambalpur", state: "Odisha", isPrimary: true, desc: "Sambalpur's businesses — from textiles to restaurants — are going digital. We provide affordable tech solutions tailored for the local market." },
    { slug: "berhampur", city: "Berhampur", state: "Odisha", isPrimary: true, desc: "Berhampur, also known as Brahmapur, is a major commercial centre in southern Odisha with growing demand for websites and digital marketing." },
    { slug: "puri", city: "Puri", state: "Odisha", isPrimary: true, desc: "Puri, known worldwide for the Jagannath Temple, has a booming tourism and hospitality industry that needs strong online presence." },
    { slug: "odisha", city: "Odisha", state: "Odisha", isState: true, isPrimary: true, desc: "Odisha is one of the fastest-growing states in India, with businesses in every district going digital. We are Odisha's most trusted web development company." },
    { slug: "jajpur", city: "Jajpur", state: "Odisha", isPrimary: true, desc: "Jajpur, home to Maa Biraja Temple and a growing industrial area, has local businesses ready for digital transformation. We help Jajpur's shops and enterprises go online." },
    { slug: "angul", city: "Angul", state: "Odisha", isPrimary: true, desc: "Angul, an industrial powerhouse of Odisha with steel plants and mining companies, has rising demand for business websites and digital marketing solutions." },
    { slug: "kendrapara", city: "Kendrapara", state: "Odisha", isPrimary: true, desc: "Kendrapara's businesses — from agriculture to retail — are embracing the digital revolution. We provide affordable web solutions tailored for the local market." },
    { slug: "jeypore", city: "Jeypore", state: "Odisha", isPrimary: true, desc: "Jeypore in Koraput district is the cultural capital of south Odisha. Local businesses here need modern websites to reach customers beyond their town." },
    { slug: "rayagada", city: "Rayagada", state: "Odisha", isPrimary: true, desc: "Rayagada's growing business community — from textile traders to educational institutes — needs professional online presence to compete in the digital age." },
    { slug: "koraput", city: "Koraput", state: "Odisha", isPrimary: true, desc: "Koraput district, known for its coffee plantations and tribal heritage, has businesses that deserve modern websites and digital marketing." },
    { slug: "sundargarh", city: "Sundargarh", state: "Odisha", isPrimary: true, desc: "Sundargarh, near the steel city of Rourkela, has a growing business community. We help local enterprises build their digital presence affordably." },
    { slug: "jharsuguda", city: "Jharsuguda", state: "Odisha", isPrimary: true, desc: "Jharsuguda, the industrial town of western Odisha, has businesses in power, mining, and retail sectors that need professional websites and apps." },
    { slug: "baripada", city: "Baripada", state: "Odisha", isPrimary: true, desc: "Baripada, the heart of Mayurbhanj district, is home to many small businesses and shops. We help them get discovered online with affordable websites." },
    { slug: "paradip", city: "Paradip", state: "Odisha", isPrimary: true, desc: "Paradip, home to one of India's largest ports, has businesses in shipping, logistics, and trade that need strong digital presence." },
    { slug: "bhadrak", city: "Bhadrak", state: "Odisha", isPrimary: true, desc: "Bhadrak's vibrant business scene — from textiles to education — is going digital. We provide website and marketing solutions that fit every budget." },
    { slug: "jagatsinghpur", city: "Jagatsinghpur", state: "Odisha", isPrimary: true, desc: "Jagatsinghpur's local businesses and entrepreneurs need a digital boost to reach customers across Odisha. We make it affordable and easy." },
    { slug: "boudh", city: "Boudh", state: "Odisha", isPrimary: true, desc: "Boudh, one of Odisha's emerging districts, has small businesses and local ventures that can benefit greatly from a professional online presence." },

    // Major Indian Cities
    { slug: "hyderabad", city: "Hyderabad", state: "Telangana", desc: "Hyderabad, India's tech capital, is home to thousands of businesses looking for reliable web development and digital marketing partners." },
    { slug: "kolkata", city: "Kolkata", state: "West Bengal", desc: "Kolkata's vibrant business community — from traditional shops to modern startups — needs affordable, reliable digital solutions." },
    { slug: "delhi", city: "Delhi & Noida", state: "Delhi NCR", desc: "Delhi NCR is India's largest business hub. We provide world-class web development and digital marketing services to businesses across the capital region." },
    { slug: "mumbai", city: "Mumbai", state: "Maharashtra", desc: "Mumbai, India's financial capital, has millions of businesses competing for attention. A strong online presence is essential to stand out." },
    { slug: "pune", city: "Pune", state: "Maharashtra", desc: "Pune's mix of IT companies and traditional businesses creates huge demand for affordable web development and digital marketing." },
    { slug: "chennai", city: "Chennai", state: "Tamil Nadu", desc: "Chennai's growing business ecosystem needs modern digital solutions. We build websites and apps that connect businesses with their customers." },
    { slug: "indore", city: "Indore", state: "Madhya Pradesh", desc: "Indore, India's cleanest city, has a rapidly growing business scene. We help local businesses go online with affordable websites and marketing." },
    { slug: "bhopal", city: "Bhopal", state: "Madhya Pradesh", desc: "Bhopal's businesses — from restaurants to real estate — are increasingly going digital. We provide tailored web solutions at honest prices." },
    { slug: "raipur", city: "Raipur", state: "Chhattisgarh", desc: "Raipur, the capital of Chhattisgarh, is experiencing rapid business growth. We help local businesses establish their digital presence." },
    { slug: "bengaluru", city: "Bengaluru", state: "Karnataka", desc: "Bengaluru, India's Silicon Valley, is the startup capital of the country. We help businesses of all sizes build world-class digital products at affordable rates." },
    { slug: "ahmedabad", city: "Ahmedabad", state: "Gujarat", desc: "Ahmedabad is Gujarat's commercial powerhouse. From textile traders to tech startups, businesses here need modern websites and digital marketing to stay competitive." },
    { slug: "jaipur", city: "Jaipur", state: "Rajasthan", desc: "Jaipur, the Pink City, has a booming tourism and handicraft industry. A professional website helps local businesses attract customers from across the world." },
    { slug: "lucknow", city: "Lucknow", state: "Uttar Pradesh", desc: "Lucknow, the city of Nawabs, has a thriving business ecosystem. From restaurants to real estate, businesses here are going digital fast." },
    { slug: "chandigarh", city: "Chandigarh", state: "Chandigarh", desc: "Chandigarh, India's best-planned city, has a growing demand for professional web development and digital marketing services." },
    { slug: "nagpur", city: "Nagpur", state: "Maharashtra", desc: "Nagpur, the Orange City and geographic heart of India, has businesses across industries looking for affordable digital solutions." },
    { slug: "patna", city: "Patna", state: "Bihar", desc: "Patna, Bihar's capital, is witnessing rapid digital growth. Local businesses — from coaching institutes to shops — are going online to reach more customers." },
    { slug: "surat", city: "Surat", state: "Gujarat", desc: "Surat, India's diamond and textile hub, has thousands of businesses that need professional websites and online marketing to grow." },
    { slug: "kochi", city: "Kochi", state: "Kerala", desc: "Kochi is Kerala's commercial capital with a growing IT sector. We help businesses here build beautiful websites and effective marketing campaigns." },
    { slug: "vizag", city: "Visakhapatnam", state: "Andhra Pradesh", desc: "Visakhapatnam (Vizag) is one of the fastest-growing cities in India. Local businesses need strong digital presence to capture this growth." },
    { slug: "coimbatore", city: "Coimbatore", state: "Tamil Nadu", desc: "Coimbatore, Tamil Nadu's industrial hub, has businesses across manufacturing, textiles, and IT that need modern digital solutions." },
    { slug: "guwahati", city: "Guwahati", state: "Assam", desc: "Guwahati, the gateway to Northeast India, has a rapidly growing business scene. We help businesses here establish a strong online presence." },

    // State-level
    { slug: "west-bengal", city: "West Bengal", state: "West Bengal", isState: true, desc: "West Bengal has a diverse business landscape from Kolkata to Siliguri. We serve businesses across the state with affordable digital solutions." },
    { slug: "chhattisgarh", city: "Chhattisgarh", state: "Chhattisgarh", isState: true, desc: "Chhattisgarh's businesses are rapidly adopting digital technology. We provide affordable web development and marketing across the state." },
];

const SERVICES_LIST = [
    { name: "Website Design & Development", icon: "flaticon-coding", short: "Professional, mobile-friendly websites that look great and convert visitors into customers." },
    { name: "Mobile App Development", icon: "flaticon-target", short: "Custom Android and iOS apps that make your business accessible from anywhere." },
    { name: "Digital Marketing & SEO", icon: "flaticon-statistics", short: "Get found on Google. We run SEO, social media, and ad campaigns that bring you more customers." },
    { name: "E-commerce Solutions", icon: "flaticon-web", short: "Start selling online with a fully functional online store — payment gateway included." },
    { name: "Branding & Graphic Design", icon: "flaticon-team", short: "Logos, business cards, social media creatives — we make your brand look professional." },
    { name: "Social Media Marketing", icon: "flaticon-setting", short: "We manage your Instagram, Facebook, and YouTube so you get likes, followers, and customers." },
    { name: "AI/ML & Automation", icon: "flaticon-satisfaction", short: "Smart tools like chatbots, automated replies, and AI dashboards to save you time and grow faster." },
    { name: "Content Creation", icon: "flaticon-clipboard", short: "Blog posts, videos, reels, and graphics — we create content that your audience loves." },
];

export { LOCATIONS, SERVICES_LIST };
