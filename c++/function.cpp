#include <iostream>
using namespace std;

void celsius_to_fahranheit(){
	
	double F;
	double cel;
	
	
	cout<<"enter cel ";
	cin>>cel;
	
	F=(cel*1.8)+32;
	cout<<F<<endl;
}

void fahranheit_to_celsius(){
	
	
    double cel;	
	double fah;
cout<<"enter fahranheit ";
cin>>fah;	
	
cel=(fah-32)*5/9;
cout<<cel<<endl;
}

int main(){
	
	celsius_to_fahranheit();
	fahranheit_to_celsius();
	
	
		return 0;
}
