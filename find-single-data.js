const {client}=require('./connection.js');
//Find Data
const findSingleData=async()=>{
	try{
		const database=client.db('product');
		const collection=database.collection('list');
		const query={name:'shirt'};
		const result=await collection.findOne(query);
		console.log('Your Finding Data is :',result);
	}catch(error){
		console.log(error);
	}finally{
		await client.close();
	}
}
//Function Calling
findSingleData()