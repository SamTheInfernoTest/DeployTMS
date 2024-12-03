from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

from .models import Student

@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    data = request.data
    uid = data['uid']
    password = data['password']
    try:
        user = Student.objects.get(uid = uid)
        if user.password == password:
            name = user.name
            profileImage =  user.profile_image.url if user.profile_image else None
            standards = user.standards.values_list('std', flat=True)
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'name': name,
                'profileImage': profileImage,
                'standards': standards,
                'bgImage' : user.background_image.url if user.background_image else None,
                'moto' : user.moto
            },status=status.HTTP_200_OK)
        else:
            return Response({'message':"Wrong Password"},status=status.HTTP_401_UNAUTHORIZED)
    except  Student.DoesNotExist:
        return Response({'message':"User does not exist"},status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def updatePassword(request):
    data = request.data
    uid = data['uid']
    password = data['password']
    
    student = Student.objects.get(uid = uid)
    student.password = password
    student.save()
    return Response({'message': 'Password updated successfully'}, status=status.HTTP_200_OK)
            

@api_view(['POST'])
def updateProfileImage(request):
    data = request.data
    uid = data['uid']
    image = request.FILES.get('image')
    student = Student.objects.get(uid = uid)    
    student.profile_image = image
    student.save()
    return Response({'message': 'Profile image updated successfully'}, status=status.HTTP_200_OK)

@api_view(['POST'])
def updateBgImage(request):
    data = request.data
    uid = data['uid']
    image = request.FILES.get('image')
    student = Student.objects.get(uid = uid)    
    student.background_image = image
    student.save()
    return Response({'message': 'Background image updated successfully'}, status=status.HTTP_200_OK)

@api_view(['POST'])
def updateMoto(request):
    data = request.data
    uid = data['uid']
    moto = data['moto']
    student = Student.objects.get(uid = uid)    
    student.moto = moto
    student.save()
    return Response({'message': 'Moto updated successfully'}, status=status.HTTP_200_OK)