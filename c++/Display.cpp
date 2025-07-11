#include <iostream>
using namespace std;

void display(int x){
	cout<<"int :"<<x<<endl;
	
}

void display(double y){
	cout<<"double :"<<y<<endl;
	
}
void display(string H)
{
	cout<<"string : "<<H<<endl;
	
}
int main(){

display(1);
display(1.56);
display("Hello");


return 0;
}