from django.conf.urls import include, url
from . import social_views
from rest_auth.registration.views import SocialAccountListView, SocialAccountDisconnectView

urlpatterns = [
    url(r'^facebook/login/$', social_views.FacebookLogin.as_view(), name='fb_login'),
    url(r'^facebook/connect/$', social_views.FacebookConnect.as_view(), name='fb_connect'),
    url(r'^google/login/$', social_views.GoogleLogin.as_view(), name='google_login'),
    url(r'^google/connect/$', social_views.GoogleConnect.as_view(), name='google_connect'),
    url(r'^twitter/login/$', social_views.TwitterLogin.as_view(), name='twitter_login'),
    url(r'^twitter/connect/$', social_views.TwitterConnect.as_view(), name='twitter_connect'),
    # Show attached accounts
    url(r'^accounts/$', SocialAccountListView.as_view(), name='social_account_list'),
    # Disconnect account  
    url(r'^accounts/(?P<pk>\d+)/disconnect/$', SocialAccountDisconnectView.as_view(), name='social_account_disconnect')
]
