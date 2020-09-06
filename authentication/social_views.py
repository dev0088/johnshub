from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.twitter.views import TwitterOAuthAdapter
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from rest_auth.social_serializers import TwitterLoginSerializer, TwitterConnectSerializer
from rest_auth.registration.views import SocialLoginView, SocialConnectView

class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter

class FacebookConnect(SocialConnectView):
    adapter_class = FacebookOAuth2Adapter

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter

class GoogleConnect(SocialConnectView):
    adapter_class = GoogleOAuth2Adapter

class TwitterConnect(SocialConnectView):
    serializer_class = TwitterConnectSerializer
    adapter_class = TwitterOAuthAdapter

class TwitterLogin(SocialLoginView):
    serializer_class = TwitterLoginSerializer
    adapter_class = TwitterOAuthAdapter
