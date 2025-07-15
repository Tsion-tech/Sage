#include <iostream>
using namespace std;

int main(){
	
	int r=5;
	int z;
	
	for(int i=0;i<r;i++){
	
	for(int j=0;j<i;j++){
	cout<<" ";
	}
	for(z=0;z<2*(r-i)-1;z++){
		
		cout<<"*";
	}
	cout<<endl;
}	
	
	
	
	return 0;
}