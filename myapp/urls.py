
from django.urls import path
from .views import *

urlpatterns = [
    path('',index,name="index"),
    path('index-2/',index_2,name="index-2"),
    path('index-4/',index_4,name="index-4"),
    path('portfolio/',portfolio,name="portfolio"),
    path('portfolio-2/',portfolio_2,name="portfolio-2"),
    path('portfolio-3/',portfolio_3,name="portfolio-3"),
    path('portfolio-mesonary/',portfolio_mesonary, name='portfolio-mesonary'),
    path('portfolio-details/',portfolio_details, name='portfolio-details'),
    path('portfolio-details001/',portfolio_details001, name='portfolio-details001'),
    path('about/',about,name="about"),
    path('about-me/',about_me,name="about-me"),
    path('job/',job,name="job"),
    path('job-details/',job_details,name="job-details"),
    path('product/',product,name="product"),
    path('product-details/',product_details,name="product-details"),
    path('service-1/',service_1,name="service-1"),
    path('service-2/',service_2,name="service-2"),
    path('service-3/',service_3,name="service-3"),
    path('service-4/',service_4,name="service-4"),
    path('service-details/',service_details,name="service-details"),
    path('Initial_Consultation/',Initial_Consultation,name="Initial_Consultation"),
    path('second_Consultation/',second_Consultation,name="second_Consultation"),
    path('third_Consultation/',third_Consultation,name="third_Consultation"),
    path('testimonial/',testimonial,name="testimonial"),
    path('price/',price,name="price"),
    path('faq/',faq,name="faq"),
    path('login/',login,name="login"),
    path('registration/',registration,name="registration"),
    path('404/',e_404,name="404"),
    path('blog/',blog,name="blog"),
    path('blog-grid-1/',blog_grid_1,name="blog-grid-1"),
    path('blog-grid-2/',blog_grid_2,name="blog-grid-2"),
    path('blog-grid-3/',blog_grid_3,name="blog-grid-3"),
    path('blog-details/',blog_details,name="blog-details"),
    path('contact/',contact,name="contact"),
    
    
    
]