#include <iostream>
using namespace std;


int main(){
int z;
for(int i=1;i<=5;i++){
	
	for(int j=5;j>i;j--){
	cout<<" ";
	}
	for(z=0;z<=(2*i-1);z++){
		
		cout<<"*";
	}
	cout<<endl;
}



return 0;	
}