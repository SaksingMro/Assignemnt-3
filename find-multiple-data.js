const {client}=require('./connection.js');
//Find Data
const findMultipleData=async()=>{
	try{
		const database=client.db('product');
		const collection=database.collection('list');
		const query={};
		const result=collection.find(query);
		if((await result.count())==0){
			console.log('Data Not Found');
		}else{
			const results=await result.toArray();
			console.log('Your Finding Data is :',results);
		}
	}catch(error){
		console.log(error);
	}finally{
		await client.close();
	}	
}
//Function Calling
findMultipleData();