from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from . import views

urlpatterns = [
    path('login/', views.login , name='loginMentor'),
    path('refresh/',TokenRefreshView.as_view(), name='token_refresh'),
    path('getMentors/<str:grade>', views.getMentors , name='getMentors'),
    path('updatePassword/',views.updatePassword , name='updatePassword'),
    path('updateProfileImage/',views.updateProfileImage , name='updateProfileImage'),
    path('updateBgImage/',views.updateBgImage , name='updateBgImage'),
    path('updateMoto/',views.updateMoto , name='updateMoto'),
]