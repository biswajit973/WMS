from django.shortcuts import render

# Create your views here.


HIGHLIGHT_PROJECTS = [
    {
        "name": "Geeta Agarwal Architects",
        "domain": "geetagarwalarchitects.netlify.app",
        "url": "https://geetagarwalarchitects.netlify.app/",
        "categories": "cat-featured cat-architecture",
        "use_iframe": True,
    },
    {
        "name": "The Kalinga Signature",
        "domain": "thekalingasignature.netlify.app",
        "url": "https://thekalingasignature.netlify.app/",
        "categories": "cat-featured cat-architecture",
        "use_iframe": True,
    },
    {
        "name": "Swasti Dental Care",
        "domain": "swastidentalcare.netlify.app",
        "url": "https://swastidentalcare.netlify.app/",
        "categories": "cat-featured cat-health",
        "use_iframe": True,
    },
    {
        "name": "Vivid LED Solutions",
        "domain": "vividledsolutions.in",
        "url": "https://vividledsolutions.in/",
        "categories": "cat-commerce cat-corporate",
        "use_iframe": True,
    },
    {
        "name": "Frutbar",
        "domain": "frutbar.com",
        "url": "https://frutbar.com/",
        "categories": "cat-commerce",
        "use_iframe": False,
        "fallback_image": "img/highlights/frutbar-fallback.svg",
    },
    {
        "name": "Oye Gifts",
        "domain": "oyegifts.com",
        "url": "https://oyegifts.com/",
        "categories": "cat-commerce",
        "use_iframe": True,
    },
    {
        "name": "FLOS",
        "domain": "flos.com",
        "url": "https://flos.com/",
        "categories": "cat-commerce cat-architecture",
        "use_iframe": False,
        "fallback_image": "img/highlights/flos-fallback.svg",
    },
    {
        "name": "CI Design",
        "domain": "ci.design",
        "url": "https://ci.design/",
        "categories": "cat-architecture",
        "use_iframe": True,
    },
    {
        "name": "Studia 54",
        "domain": "studia-54.com",
        "url": "https://studia-54.com/",
        "categories": "cat-architecture",
        "use_iframe": False,
        "fallback_image": "img/highlights/studia54-fallback.svg",
    },
    {
        "name": "Proven Robotics",
        "domain": "provenrobotics.ai",
        "url": "https://provenrobotics.ai/",
        "categories": "cat-corporate",
        "use_iframe": True,
    },
    {
        "name": "KFSHRC",
        "domain": "kfshrc.edu.sa",
        "url": "https://kfshrc.edu.sa/",
        "categories": "cat-health cat-corporate",
        "use_iframe": False,
        "fallback_image": "img/highlights/kfshrc-fallback.svg",
    },
    {
        "name": "X Hair Lounge",
        "domain": "xhairlounge.com",
        "url": "https://xhairlounge.com/",
        "categories": "cat-health cat-commerce",
        "use_iframe": True,
    },
    {
        "name": "Chaps & Co",
        "domain": "chapsandco.com",
        "url": "https://chapsandco.com/",
        "categories": "cat-health cat-commerce",
        "use_iframe": True,
    },
    {
        "name": "MUA Crystal Salon",
        "domain": "muacrystalsalon.com",
        "url": "https://muacrystalsalon.com/",
        "categories": "cat-health cat-commerce",
        "use_iframe": False,
        "fallback_image": "img/highlights/mua-fallback.svg",
    },
    {
        "name": "Burjeel",
        "domain": "burjeel.com",
        "url": "https://burjeel.com/",
        "categories": "cat-health cat-corporate",
        "use_iframe": False,
        "fallback_image": "img/highlights/burjeel-fallback.svg",
    },
    {
        "name": "Smith Clark Cast Iron",
        "domain": "smithclarkcastiron.com",
        "url": "https://smithclarkcastiron.com/",
        "categories": "cat-corporate cat-commerce",
        "use_iframe": False,
        "fallback_image": "img/highlights/smithclark-fallback.svg",
    },
]



def index(request):
    
    return render(request,'index-4.html')

def index_2(request):
    return render(request,'index-2.html')

def index_4(request):
    return render(request,'index-4.html')

def portfolio(request):
    return render(request, 'portfolio.html', {"highlights": HIGHLIGHT_PROJECTS})

def portfolio_2(request):
    return render(request,'portfolio-2.html')

def portfolio_3(request):
    return render(request,'portfolio-3.html')

def portfolio_mesonary(request):
    return render(request,'portfolio-mesonary.html')
    

def portfolio_details(request):
    return render(request,'portfolio-details.html')

def portfolio_details001(request):
    return render(request,'portfolio-details001.html')

def about(request):
    return render(request,'about.html')

def about_me(request):
    return render(request,'about-me.html')

def job(request):
    return render(request,'job.html')

def job_details(request):
    return render(request,'job-details.html')

def product(request):
    return render(request,'product.html')

def product_details(request):
    return render(request,'product-details.html')


def service_1(request):
    return render(request,'service-1.html')


def service_2(request):
    return render(request,'service-2.html')

def service_3(request):
    return render(request,'service-3.html')
    
def service_4(request):
    return render(request,'service-4.html')

def service_details(request):
    return render(request,'service-details.html')


def Initial_Consultation(request):
    return render(request,'Initial_Consultation.html')
    
    
def third_Consultation(request):
    return render(request,'third_Consultation.html')


def second_Consultation(request):
    return render(request,"second_Consultation.html")

def testimonial(request):
    return render(request,'testimonial.html')

def price(request):
    return render(request,'price.html')

def faq(request):
    return render(request,'faq.html')

def login(request):
    return render(request,"login.html")

def registration(request):
    return render(request,"registration.html")

def e_404(request):
    return render(request,"404.html")

def blog(request):
    return render(request,"blog.html")

def blog_grid_1(request):
    return render(request,"blog-grid-1.html")

def blog_grid_2(request):
    return render(request,"blog-grid-2.html")

def blog_grid_3(request):
    return render(request,"blog-grid-3.html")

def blog_details(request):
    return render(request,"blog-details.html")

def contact(request):
    return render(request,"contact.html")
        
    
